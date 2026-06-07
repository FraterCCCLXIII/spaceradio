import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-charcoal-700/40 bg-void">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <p className="logo-text text-muted">
          © 2026 SpaceRadio
        </p>
        <div className="flex flex-wrap gap-6 font-mono text-[11px] uppercase tracking-[0.16em]">
          <Link to="/manifesto" className="text-muted transition-colors hover:text-signal">
            Manifesto
          </Link>
          <Link to="/program" className="text-muted transition-colors hover:text-signal">
            Program
          </Link>
          <Link to="/transmissions" className="text-muted transition-colors hover:text-signal">
            Registry
          </Link>
          <Link to="/sponsors" className="text-muted transition-colors hover:text-signal">
            Partners
          </Link>
          <Link to="/team" className="text-muted transition-colors hover:text-signal">
            Team
          </Link>
          <Link to="/app" className="text-muted transition-colors hover:text-signal">
            Listen
          </Link>
        </div>
        <p className="font-mono text-[10px] text-muted/60">
          Demo · Placeholder audio
        </p>
      </div>
    </footer>
  )
}
