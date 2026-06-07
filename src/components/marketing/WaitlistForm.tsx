import { useState, type FormEvent } from 'react'
import { Button } from '../ui/Button'

export function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-xl rounded-2xl border border-signal/10 bg-void-panel p-8 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">Follow the beam</h2>
        <p className="mt-2 text-sm text-muted">
          Transmission alerts, new Originals, and launch-day listening parties.
        </p>

        {submitted ? (
          <p className="mt-6 font-mono text-sm text-beam">
            Signal acquired. Check your inbox.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-3">
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
              className="w-full rounded-lg border border-signal/20 bg-void px-4 py-3 text-sm text-[#e8eaed] placeholder:text-muted/60 focus:border-signal focus:outline-none focus:ring-1 focus:ring-signal"
            />
            <Button type="submit" className="w-full">
              Join waitlist
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
