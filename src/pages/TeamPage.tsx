import { TeamMemberCard } from '../components/team/TeamMemberCard'
import { teamMembers } from '../lib/team-data'

export function TeamPage() {
  return (
    <div className="px-6 py-12 sm:px-10 lg:px-16">
      <h1 className="page-heading">Team</h1>
      <p className="mt-4 max-w-2xl text-charcoal-200">
        SpaceRadio is built by people who work at the intersection of space,
        culture, and technology — from regulatory leadership to product design
        and broadcast.
      </p>

      <div className="mt-10 flex flex-wrap gap-8 sm:gap-10">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  )
}
