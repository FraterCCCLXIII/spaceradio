import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('SpaceRadio render error:', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-void px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-orbit">
            Signal interrupted
          </p>
          <h1 className="mt-4 font-display text-xl font-normal uppercase tracking-wide text-signal">
            Something went wrong
          </h1>
          <p className="mt-4 max-w-md font-mono text-xs text-muted">
            {this.state.error.message}
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-8 border border-charcoal-500 px-6 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-signal hover:bg-charcoal-800"
          >
            Reload
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
