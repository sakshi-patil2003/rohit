import { profile } from '../data/projects.js'

export default function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[11px] tracking-widest uppercase text-mute">
          © {new Date().getFullYear()} Rohit Patil
        </p>
        <div className="flex gap-6">
          <a
            href={profile.behanceUrl}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[11px] tracking-widest uppercase text-mute hover:text-paper transition-colors"
          >
            Behance
          </a>
          <a
            href={profile.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[11px] tracking-widest uppercase text-mute hover:text-paper transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
