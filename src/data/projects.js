// ---------------------------------------------------------------------------
// SOURCE OF TRUTH: https://www.behance.net/rohitpatil204
// Every field below was read directly off Rohit's live Behance profile and
// project grid. Nothing here is invented — where Behance doesn't expose a
// piece of info (category tags, project dates, durations), the field is
// simply omitted rather than guessed.
//
// MEDIA STRATEGY (see README for the full writeup):
//   - `thumb` is the exact public thumbnail URL Behance itself serves on the
//     profile grid (mir-s3-cdn-cf.behance.net). It's already a hotlink target
//     Behance uses in its own page, so it's safe to reference directly.
//   - `embedUrl` uses Behance's own sanctioned "Embed Project" iframe
//     (behance.net/embed/project/{id}), which renders the *actual* live
//     project — all real images, video, and copy — straight from Behance.
//     This is how the site shows real media without scraping or hotlinking
//     anything Behance doesn't already intend to be embedded elsewhere.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Rohit Patil',
  title: 'Filmmaker | DOP | Video Editor',
  location: 'Pune, India',
  availability: 'Available for Freelance & Fulltime',
  memberSince: 'May 6, 2026',
  behanceUrl: 'https://www.behance.net/rohitpatil204',
  instagramUrl: 'http://instagram.com/rohitpatilfilms',
  avatar:
    'https://pps.services.adobe.com/api/profile/288B81F169FB80FC0A495F9A@AdobeID/image/e93bcbe8-3420-4cc1-97ad-a7ebea24c15e/276',
  banner:
    'https://mir-s3-cdn-cf.behance.net/c8666a464cff0df25f87faaac4eb82a4/153bd36e-dd3b-4285-8291-af4d80b1c7a9_rwc_0x690x2199x1624x2199.jpg?h=9ee56604a0a1e367f32ab94d6f95a25d',
  ogImage:
    'https://mir-s3-cdn-cf.behance.net/c8666a464cff0df25f87faaac4eb82a4/5063c488-2d9f-4f0f-a743-3a57b7dba418_acc_1200x630.png?h=00e82fb784eb305dd9d9c548b719f8d9',
}

// Listed in the same order Behance's own profile grid shows them.
export const projects = [
  {
    id: '253774059',
    slug: 'kalyani',
    title: 'Kalyani',
    thumb:
      'https://mir-s3-cdn-cf.behance.net/projects/404/8c6e77253774059.Y3JvcCwyNzYxLDIxNjAsNjEsMA.jpg',
    embedUrl: 'https://www.behance.net/embed/project/253774059?ilo0=1',
    behanceUrl: 'https://www.behance.net/gallery/253774059/Kalyani',
    featured: true,
  },
  {
    id: '251953183',
    slug: 'behind-the-scene',
    title: 'Behind The Scene',
    thumb:
      'https://mir-s3-cdn-cf.behance.net/projects/404/954588251953183.Y3JvcCwxNjcyLDEzMDgsODYxLDM2NA.png',
    embedUrl: 'https://www.behance.net/embed/project/251953183?ilo0=1',
    behanceUrl: 'https://www.behance.net/gallery/251953183/Behind-The-Scene',
  },
  {
    id: '251952673',
    slug: 'music-video-251952673',
    title: 'Music Video',
    thumb:
      'https://mir-s3-cdn-cf.behance.net/projects/404/b92e98251952673.Y3JvcCwyNzYxLDIxNjAsNDcxLDA.jpeg',
    embedUrl: 'https://www.behance.net/embed/project/251952673?ilo0=1',
    behanceUrl: 'https://www.behance.net/gallery/251952673/Music-Video',
  },
  {
    id: '250522033',
    slug: 'hyrox',
    title: 'HYROX',
    thumb:
      'https://mir-s3-cdn-cf.behance.net/projects/404/a7b27b250522033.Y3JvcCwyMDk5LDE2NDIsMzg5LDA.png',
    embedUrl: 'https://www.behance.net/embed/project/250522033?ilo0=1',
    behanceUrl: 'https://www.behance.net/gallery/250522033/HYROX',
  },
  {
    id: '250525535',
    slug: 'mantra-properties',
    title: 'Mantra Properties',
    thumb:
      'https://mir-s3-cdn-cf.behance.net/projects/404/a86e3a250525535.Y3JvcCw5NjgsNzU3LDAsNTAz.png',
    embedUrl: 'https://www.behance.net/embed/project/250525535?ilo0=1',
    behanceUrl: 'https://www.behance.net/gallery/250525535/Mantra-Properties',
  },
  {
    id: '250526351',
    slug: 'transformation-documentary',
    title: 'Transformation Documentary',
    thumb:
      'https://mir-s3-cdn-cf.behance.net/projects/404/b5dd24250526351.Y3JvcCw5NzAsNzU4LDAsNDYz.png',
    embedUrl: 'https://www.behance.net/embed/project/250526351?ilo0=1',
    behanceUrl:
      'https://www.behance.net/gallery/250526351/Transformation-Documentary',
  },
  {
    id: '251046209',
    slug: 'music-video-251046209',
    title: 'Music Video',
    thumb:
      'https://mir-s3-cdn-cf.behance.net/projects/404/d80f17251046209.Y3JvcCwyNzYxLDIxNjAsMzU1LDA.jpg',
    embedUrl: 'https://www.behance.net/embed/project/251046209?ilo0=1',
    behanceUrl: 'https://www.behance.net/gallery/251046209/Music-Video',
  },
  {
    id: '250525327',
    slug: 'music-video-250525327',
    title: 'Music Video',
    thumb:
      'https://mir-s3-cdn-cf.behance.net/projects/404/57de67250525327.Y3JvcCwyMTYwLDE2ODksMCwxMzg0.jpg',
    embedUrl: 'https://www.behance.net/embed/project/250525327?ilo0=1',
    behanceUrl: 'https://www.behance.net/gallery/250525327/Music-Video',
  },
  {
    id: '250525731',
    slug: 'ladakh',
    title: 'Ladakh',
    thumb:
      'https://mir-s3-cdn-cf.behance.net/projects/404/ee14ff250525731.Y3JvcCw1Mjc3LDQxMjgsNzgsMA.jpg',
    embedUrl: 'https://www.behance.net/embed/project/250525731?ilo0=1',
    behanceUrl: 'https://www.behance.net/gallery/250525731/Ladakh',
  },
]

// Straight from the "Work Experience" block on the profile. No dates were
// given there, so none are shown — better an honest gap than an invented one.
export const experience = [
  {
    role: 'Cinematographer | Editor',
    org: 'Freelance',
    location: 'India',
  },
  {
    role: 'Cinematographer | Editor',
    org: 'Wildfit',
    location: 'India',
  },
]

// The profile doesn't publish a services list — this is a reasonable
// distillation of the disciplines actually represented across the projects
// above (cinematography, edited music videos, BTS coverage, documentary).
export const services = [
  'Cinematography',
  'Video Editing',
  'Music Videos',
  'Documentary',
  'Behind the Scenes Coverage',
]
