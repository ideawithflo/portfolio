'use client'

interface ModelViewerProps {
  src: string
  poster?: string
  alt?: string
}

export function ModelViewer({ src, poster, alt = '3D Model' }: ModelViewerProps) {
  return (
    <div className="relative w-full h-full min-h-[480px]">
      {/* model-viewer loaded via CDN script in layout.tsx */}
      {/* @ts-ignore */}
      <model-viewer
        src={src}
        poster={poster}
        alt={alt}
        auto-rotate
        camera-controls
        shadow-intensity="1"
        style={{ width: '100%', height: '100%', minHeight: '480px', background: 'transparent' }}
      />
      <p className="absolute bottom-3 right-3 font-mono text-xs opacity-100 select-none pointer-events-none">
        drag to rotate · scroll to zoom
      </p>
    </div>
  )
}
