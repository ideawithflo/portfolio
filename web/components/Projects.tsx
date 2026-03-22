import { ProjectCard } from './ProjectCard'
import { getProjects } from '@/lib/queries'

const placeholderProjects = [
  { _id: '1', title: 'Arc Chair', category: 'Furniture', year: 2024, slug: { current: 'arc-chair' } },
  { _id: '2', title: 'Modular Kitchen System', category: 'Product Design', year: 2024, slug: { current: 'modular-kitchen' } },
  { _id: '3', title: 'Portable Lamp Series', category: 'Lighting', year: 2023, slug: { current: 'portable-lamp' } },
  { _id: '4', title: 'Electric Scooter Concept', category: 'Mobility', year: 2023, slug: { current: 'electric-scooter' } },
  { _id: '5', title: 'Medical Device Redesign', category: 'Healthcare', year: 2022, slug: { current: 'medical-device' } },
  { _id: '6', title: 'Outdoor Seating Collection', category: 'Furniture', year: 2022, slug: { current: 'outdoor-seating' } },
  { _id: '7', title: 'Smart Home Hub', category: 'Electronics', year: 2022, slug: { current: 'smart-home-hub' } },
  { _id: '8', title: 'Sustainable Packaging', category: 'Packaging', year: 2021, slug: { current: 'sustainable-packaging' } },
  { _id: '9', title: 'Bicycle Component Set', category: 'Mobility', year: 2021, slug: { current: 'bicycle-components' } },
  { _id: '10', title: 'Exhibition Display System', category: 'Spatial Design', year: 2021, slug: { current: 'exhibition-display' } },
]

export async function Projects() {
  let projects = []
  try {
    projects = await getProjects()
  } catch (e) {
    projects = []
  }

  // Use Sanity data if available, otherwise placeholders
  const displayProjects = projects.length > 0 ? projects : placeholderProjects

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <p className="font-mono text-xs tracking-widest uppercase opacity-40">Projects</p>
          <span className="font-mono text-xs opacity-30">{displayProjects.length} works</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {displayProjects.map((project: any) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
