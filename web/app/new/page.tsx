'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

const SLOTS = ['10:00', '11:00', '14:00', '15:00']
const MIN_WEEKS_AHEAD = 3

function getAvailableDates(): Date[] {
  const dates: Date[] = []
  const today = new Date()
  const minDate = new Date(today)
  minDate.setDate(today.getDate() + MIN_WEEKS_AHEAD * 7)

  // Show 8 weeks of available dates from minDate
  const maxDate = new Date(minDate)
  maxDate.setDate(minDate.getDate() + 8 * 7)

  const cursor = new Date(minDate)
  while (cursor <= maxDate) {
    const day = cursor.getDay()
    if (day >= 1 && day <= 5) { // Mon–Fri
      dates.push(new Date(cursor))
    }
    cursor.setDate(cursor.getDate() + 1)
  }
  return dates
}

function formatDate(d: Date) {
  return d.toLocaleDateString('en-AT', { weekday: 'short', day: '2-digit', month: 'short' })
}

function formatDateFull(d: Date) {
  return d.toLocaleDateString('en-AT', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })
}

type Step = 'date' | 'slot' | 'form' | 'done'

export default function NewPage() {
  const [step, setStep] = useState<Step>('date')
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [sending, setSending] = useState(false)

  const dates = useMemo(() => getAvailableDates(), [])

  // Group dates by week
  const weeks: Date[][] = []
  let currentWeek: Date[] = []
  dates.forEach((d, i) => {
    currentWeek.push(d)
    if (d.getDay() === 5 || i === dates.length - 1) {
      weeks.push(currentWeek)
      currentWeek = []
    }
  })

  const handleSubmit = async () => {
    if (!selectedDate || !selectedSlot || !form.name || !form.email) return
    setSending(true)

    const subject = `New Project Inquiry — ${formatDateFull(selectedDate)} at ${selectedSlot}`
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0ACompany: ${form.company}%0A%0AMessage:%0A${form.message}%0A%0ARequested Meeting:%0A${formatDateFull(selectedDate)} at ${selectedSlot}`

    window.location.href = `mailto:new@ideawithflo.com?subject=${encodeURIComponent(subject)}&body=${body}`

    setTimeout(() => {
      setSending(false)
      setStep('done')
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-mono text-xs tracking-widest uppercase opacity-100 hover:opacity-100 transition-opacity">
            ← Back
          </Link>
          <span className="font-mono text-xs opacity-100 tracking-widest uppercase">New Project</span>
        </div>
      </div>

      <div className="pt-24 pb-24 px-6 max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs tracking-widest uppercase opacity-100 mb-4">Start something</p>
          <h1 className="text-5xl md:text-7xl font-light leading-none mb-6">New Idea.</h1>
          <p className="opacity-100 font-light max-w-lg">
            Pick a date and time for a free 30-minute intro call. Tell me about your project and let’s see if we’re a good fit.
          </p>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-3 mb-12">
          {(['date', 'slot', 'form'] as Step[]).map((s, i) => (
            <div key={s} className="flex items-center gap-3">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs transition-all
                ${step === s ? 'bg-[var(--fg)] text-[var(--bg)]' :
                  ['date', 'slot', 'form', 'done'].indexOf(step) > i ? 'bg-[var(--fg)] text-[var(--bg)] opacity-100' :
                  'border border-[var(--border)] opacity-100'}`}>
                {i + 1}
              </div>
              <span className={`font-mono text-xs uppercase tracking-widest ${step === s ? 'opacity-100' : 'opacity-100'}`}>
                {s === 'date' ? 'Pick a date' : s === 'slot' ? 'Pick a time' : 'Your details'}
              </span>
              {i < 2 && <span className="opacity-100 font-mono">—</span>}
            </div>
          ))}
        </div>

        {/* Step 1: Date */}
        {step === 'date' && (
          <div>
            <p className="font-mono text-xs uppercase tracking-widest opacity-100 mb-6">Available dates — Mon to Fri, starting {formatDate(dates[0])}</p>
            <div className="flex flex-col gap-2">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-wrap gap-2">
                  {week.map((date, di) => (
                    <button
                      key={di}
                      onClick={() => { setSelectedDate(date); setStep('slot') }}
                      className="px-4 py-3 border border-[var(--border)] font-mono text-sm hover:border-[var(--fg)] hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-all"
                    >
                      {formatDate(date)}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Time slot */}
        {step === 'slot' && selectedDate && (
          <div>
            <button onClick={() => setStep('date')} className="font-mono text-xs opacity-100 hover:opacity-100 mb-8 block transition-opacity">← Change date</button>
            <p className="font-mono text-xs uppercase tracking-widest opacity-100 mb-2">Selected date</p>
            <p className="text-2xl font-light mb-8">{formatDateFull(selectedDate)}</p>
            <p className="font-mono text-xs uppercase tracking-widest opacity-100 mb-6">Available times (CET)</p>
            <div className="flex flex-wrap gap-3">
              {SLOTS.map(slot => (
                <button
                  key={slot}
                  onClick={() => { setSelectedSlot(slot); setStep('form') }}
                  className="px-8 py-4 border border-[var(--border)] font-mono text-lg hover:border-[var(--fg)] hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-all"
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Form */}
        {step === 'form' && selectedDate && selectedSlot && (
          <div>
            <button onClick={() => setStep('slot')} className="font-mono text-xs opacity-100 hover:opacity-100 mb-8 block transition-opacity">← Change time</button>

            {/* Booking summary */}
            <div className="border border-[var(--border)] p-5 mb-10 flex items-center justify-between">
              <div>
                <p className="font-mono text-xs opacity-100 uppercase tracking-widest mb-1">Your booking</p>
                <p className="font-light">{formatDateFull(selectedDate)}</p>
                <p className="font-mono text-sm opacity-100">{selectedSlot} CET · 30 min intro call · Free</p>
              </div>
              <span className="text-2xl">📅</span>
            </div>

            <div className="flex flex-col gap-6 max-w-lg">
              <div>
                <label className="font-mono text-xs tracking-widest uppercase opacity-100 block mb-2">Your name *</label>
                <input value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))}
                  className="w-full bg-transparent border-b border-[var(--border)] pb-3 focus:outline-none focus:border-[var(--fg)] transition-colors font-light placeholder:opacity-100"
                  placeholder="Firstname Lastname" />
              </div>
              <div>
                <label className="font-mono text-xs tracking-widest uppercase opacity-100 block mb-2">Email *</label>
                <input type="email" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))}
                  className="w-full bg-transparent border-b border-[var(--border)] pb-3 focus:outline-none focus:border-[var(--fg)] transition-colors font-light placeholder:opacity-100"
                  placeholder="your@email.com" />
              </div>
              <div>
                <label className="font-mono text-xs tracking-widest uppercase opacity-100 block mb-2">Company / Brand</label>
                <input value={form.company} onChange={e => setForm(f => ({...f, company: e.target.value}))}
                  className="w-full bg-transparent border-b border-[var(--border)] pb-3 focus:outline-none focus:border-[var(--fg)] transition-colors font-light placeholder:opacity-100"
                  placeholder="Optional" />
              </div>
              <div>
                <label className="font-mono text-xs tracking-widest uppercase opacity-100 block mb-2">Tell me about your idea *</label>
                <textarea value={form.message} onChange={e => setForm(f => ({...f, message: e.target.value}))} rows={4}
                  className="w-full bg-transparent border-b border-[var(--border)] pb-3 focus:outline-none focus:border-[var(--fg)] transition-colors font-light placeholder:opacity-100 resize-none"
                  placeholder="What are you working on? What’s the challenge?" />
              </div>
              <button
                onClick={handleSubmit}
                disabled={!form.name || !form.email || !form.message || sending}
                className="self-start font-mono text-xs tracking-widest uppercase border border-[var(--fg)] px-8 py-4 hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors disabled:opacity-100 disabled:cursor-not-allowed"
              >
                {sending ? 'Opening email...' : 'Send Request →'}
              </button>
              <p className="font-mono text-xs opacity-100">This opens your email client with all details pre-filled. Florian will confirm your slot within 24h.</p>
            </div>
          </div>
        )}

        {/* Done */}
        {step === 'done' && (
          <div className="text-center py-16">
            <p className="text-6xl mb-8">🎉</p>
            <h2 className="text-3xl font-light mb-4">Request sent!</h2>
            <p className="opacity-100 font-light mb-2">Your email client should have opened with all details.</p>
            <p className="opacity-100 font-mono text-xs mb-10">Florian will confirm your slot at {selectedSlot} on {selectedDate && formatDateFull(selectedDate)} within 24h.</p>
            <Link href="/" className="font-mono text-xs tracking-widest uppercase border border-[var(--fg)] px-6 py-3 hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors">
              Back to Portfolio
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
