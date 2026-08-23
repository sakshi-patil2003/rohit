import { useEffect, useRef, useState } from 'react'

// Renders a project's *actual* Behance content via Behance's own sanctioned
// "Embed Project" iframe (behance.net/embed/project/{id}). This is the
// technically reliable way to show real Behance media: Behance serves and
// owns the iframe's contents directly, so there's no hotlinking, no scraping,
// and nothing that breaks when Behance rotates asset URLs.
//
// The iframe is not mounted until it's either explicitly requested (a modal
// opening) or scrolled into view, per the lazy-loading requirement — a
// project detail page with several of these should not fire nine embed
// requests on load.
export default function BehanceEmbed({ embedUrl, title, eager = false, aspect = '78.2%' }) {
  const [mounted, setMounted] = useState(eager)
  const [loaded, setLoaded] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (eager || mounted) return
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setMounted(true)
          io.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [eager, mounted])

  return (
    <div
      ref={ref}
      className="relative w-full bg-raised overflow-hidden"
      style={{ paddingBottom: aspect }}
    >
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-[10px] tracking-widest uppercase text-mute animate-pulse">
            Loading from Behance…
          </span>
        </div>
      )}
      {mounted && (
        <iframe
          src={embedUrl}
          title={`${title} — Behance embed`}
          onLoad={() => setLoaded(true)}
          loading="lazy"
          allow="clipboard-write *; fullscreen *; encrypted-media *"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
          style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.4s ease' }}
        />
      )}
    </div>
  )
}
