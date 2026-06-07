import paulBlochPhoto from '../assets/team/paul-bloch.png'

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  imageUrl: string
  linkedInUrl?: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 'paul-bloch',
    name: 'Paul Bloch',
    role: 'Founder',
    bio: 'Product designer and entrepreneur. Co-founder of Fathom.fm and Podium. Building SpaceRadio at the intersection of broadcast, AI, and space culture.',
    imageUrl: paulBlochPhoto,
    linkedInUrl: 'https://www.linkedin.com/in/paul-bloch-2316538/',
  },
  {
    id: 'sagi-kfir',
    name: 'Sagi Kfir',
    role: 'General Counsel',
    bio: 'SpaceFund GC, co-founded Deep Space Industries, and led regulatory at Blue Origin',
    imageUrl:
      'https://overview-website.transforms.svdcdn.com/production/People/Sagi.jpg?w=2000&h=2000&q=75&auto=format&fit=clip&dm=1765256054&s=c014e21ef446b8bcf76459d56798b7dd',
    linkedInUrl: 'https://www.linkedin.com/in/sagikfir/',
  },
]
