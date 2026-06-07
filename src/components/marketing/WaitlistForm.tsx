import { useState, type FormEvent } from 'react'

export function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className="border-t border-charcoal-700/40 px-6 py-20 sm:px-10 lg:px-16">
      <h2 className="page-heading">Follow the beam</h2>
      <p className="mt-4 max-w-md text-charcoal-200">
        Transmission alerts, new Originals, and launch-day listening parties.
      </p>

      {submitted ? (
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-signal">
          Signal acquired. Check your inbox.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@mission.control"
            className="flex-1 border border-charcoal-600 bg-charcoal-900 px-4 py-3 font-mono text-sm text-signal placeholder:text-muted focus:border-charcoal-400 focus:outline-none"
          />
          <button
            type="submit"
            className="border border-charcoal-500 bg-transparent px-6 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-signal transition-colors hover:bg-charcoal-800"
          >
            Join waitlist
          </button>
        </form>
      )}
    </section>
  )
}
