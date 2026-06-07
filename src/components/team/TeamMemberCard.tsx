import { LinkedinLogo } from '@phosphor-icons/react'
import { useState } from 'react'
import type { TeamMember } from '../../lib/team-data'

interface TeamMemberCardProps {
  member: TeamMember
}

function initials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <article
      className="mx-auto flex max-w-[270px] flex-col items-center gap-5 text-center md:mx-0 md:max-w-none md:items-start md:text-left"
    >
      <div className="aspect-[0.82/1] w-full overflow-hidden rounded-[13px] border border-charcoal-600/40 bg-void-panel">
        {!imageFailed ? (
          <img
            src={member.imageUrl}
            alt={member.name}
            width={800}
            height={976}
            loading="lazy"
            className="team-photo h-full w-full object-cover"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-charcoal-700 to-charcoal-800">
            <span className="font-display text-4xl uppercase tracking-wide text-signal">
              {initials(member.name)}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2.5">
        <h2 className="font-display text-xl font-normal uppercase tracking-wide text-signal">
          {member.name}
        </h2>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-orbit">
          {member.role}
        </p>
      </div>

      <p className="text-sm leading-relaxed text-charcoal-200">{member.bio}</p>

      {member.linkedInUrl && (
        <a
          href={member.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-charcoal-600/50 p-2.5 text-signal transition-colors hover:border-signal/30 hover:bg-charcoal-700/40 hover:text-beam"
          aria-label={`${member.name} on LinkedIn`}
        >
          <LinkedinLogo size={18} weight="fill" />
        </a>
      )}
    </article>
  )
}
