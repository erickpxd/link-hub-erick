import type { SVGProps } from "react";

type Social = {
  label: string;
  href: string;
  icon: (props: SVGProps<SVGSVGElement>) => React.ReactElement;
};

const Instagram = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const LinkedIn = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3zM10 9.75h3.8v1.6h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H18.6v-4.7c0-1.12-.02-2.56-1.56-2.56-1.57 0-1.81 1.22-1.81 2.48V21H10z"/>
  </svg>
);
const YouTube = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M23 12s0-3.6-.46-5.33a2.78 2.78 0 0 0-1.96-1.97C18.85 4.24 12 4.24 12 4.24s-6.85 0-8.58.46A2.78 2.78 0 0 0 1.46 6.67C1 8.4 1 12 1 12s0 3.6.46 5.33a2.78 2.78 0 0 0 1.96 1.97c1.73.46 8.58.46 8.58.46s6.85 0 8.58-.46a2.78 2.78 0 0 0 1.96-1.97C23 15.6 23 12 23 12ZM9.75 15.5v-7L15.75 12z"/>
  </svg>
);
const Github = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 .5a11.5 11.5 0 0 0-3.63 22.42c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.19 1.18a11.1 11.1 0 0 1 5.8 0c2.22-1.49 3.19-1.18 3.19-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.26 5.69.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/>
  </svg>
);
const Lovable = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />
  </svg>
);

const socials: Social[] = [
  { label: "Instagram", href: "https://instagram.com/", icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: LinkedIn },
  { label: "YouTube", href: "https://youtube.com/", icon: YouTube },
  { label: "GitHub", href: "https://github.com/erickpxd", icon: Github },
  { label: "Lovable", href: "https://lovable.dev/", icon: Lovable },
];

export default function SocialLinks() {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-3">
      {socials.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="glass glass-hover w-12 h-12 rounded-full flex items-center justify-center text-white/80 hover:text-white"
          >
            <Icon width={20} height={20} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
