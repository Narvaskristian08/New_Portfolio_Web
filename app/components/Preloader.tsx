'use client'

type PreloaderProps = {
  visible: boolean
}

export default function Preloader({ visible }: PreloaderProps) {
  return (
    <div
      aria-hidden={!visible}
      className={`splash-backdrop ${visible ? 'splash-visible opacity-100 scale-100' : 'splash-hidden opacity-0 scale-95 pointer-events-none'}`}
    >
      <div className="splash-card">
        <div className="paper-illustration">
          <div className="paper-sheet sheet-back" />
          <div className="paper-sheet sheet-front" />
          <div className="paper-lines">
            <span />
            <span />
            <span />
          </div>
          <div className="paper-pencil" />
        </div>
        <p className="splash-text flex items-center justify-center gap-2">
          Sketching your page
          <span className="splash-dots-inline">
            <span />
            <span />
            <span />
          </span>
        </p>
      </div>
    </div>
  )
}

