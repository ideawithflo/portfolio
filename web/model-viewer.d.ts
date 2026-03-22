declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string
      poster?: string
      alt?: string
      'auto-rotate'?: boolean | string
      'camera-controls'?: boolean | string
      'shadow-intensity'?: string
      style?: React.CSSProperties
    }
  }
}
