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
        <div className="splash-icon">
          <div className="splash-ring" />
        </div>
        <p className="splash-text">
          Loading your experience
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

