import { Link, useParams } from 'react-router-dom'
import { getOrchardWhitepaper } from '../content/orchard-program/whitepapers'
import { WhitepaperLayout } from '../components/whitepaper/WhitepaperLayout'

export function WhitepaperPage() {
  const { slug } = useParams()
  const paper = slug ? getOrchardWhitepaper(slug) : undefined

  if (!paper) {
    return (
      <div className="px-6 py-20 text-center sm:px-10">
        <p className="text-muted">Whitepaper not found.</p>
        <Link to="/program" className="mt-4 inline-block text-signal">
          ? Orchard Program
        </Link>
      </div>
    )
  }

  return <WhitepaperLayout paper={paper} />
}
