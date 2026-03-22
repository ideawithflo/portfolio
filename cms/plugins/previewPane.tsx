import React from 'react'

interface PreviewPaneProps {
  document: {
    displayed: {
      _type: string
      slug?: { current: string }
    }
  }
}

export function PreviewPane({ document }: PreviewPaneProps) {
  const { displayed } = document

  const slug = displayed?.slug?.current
  const previewUrl = slug
    ? `http://localhost:3000/api/draft?secret=preview-kira&slug=/projects/${slug}`
    : `http://localhost:3000/api/draft?secret=preview-kira`

  return React.createElement(
    'div',
    { style: { width: '100%', height: '100%', display: 'flex', flexDirection: 'column' } },
    React.createElement(
      'div',
      {
        style: {
          padding: '8px 12px',
          background: '#1a1a1a',
          borderBottom: '1px solid #333',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '8px',
        },
      },
      React.createElement(
        'span',
        { style: { fontFamily: 'monospace', fontSize: '11px', color: '#888' } },
        '🔴 Live Preview'
      ),
      React.createElement(
        'a',
        {
          href: previewUrl,
          target: '_blank',
          rel: 'noopener noreferrer',
          style: {
            fontFamily: 'monospace',
            fontSize: '10px',
            color: '#e8ff47',
            textDecoration: 'none',
            padding: '2px 8px',
            border: '1px solid #e8ff47',
            borderRadius: '3px',
          },
        },
        'Open in new tab ↗'
      )
    ),
    React.createElement('iframe', {
      src: previewUrl,
      style: { flex: 1, border: 'none', background: '#fff' },
    })
  )
}
