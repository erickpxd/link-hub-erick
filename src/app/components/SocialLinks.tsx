import Image, { type StaticImageData } from "next/image";
import githubIcon from "../assets/github-svgrepo-com.svg";
import gitlabIcon from "../assets/gitlab-svgrepo-com.svg";
import instagramIcon from "../assets/instagram-logo-facebook-2-svgrepo-com.svg";
import linkedinIcon from "../assets/linkedin-svgrepo-com.svg";
import youtubeIcon from "../assets/youtube-svgrepo-com.svg";

type Social = {
  label: string;
  href: string;
  icon: StaticImageData;
};

const socials: Social[] = [
  { label: "Instagram", href: "https://instagram.com/", icon: instagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: linkedinIcon },
  { label: "YouTube", href: "https://youtube.com/", icon: youtubeIcon },
  { label: "GitHub", href: "https://github.com/erickpxd", icon: githubIcon },
  { label: "GitLab", href: "https://gitlab.com/", icon: gitlabIcon },
];

export default function SocialLinks() {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-4">
      {socials.map(({ label, href, icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="glass glass-hover flex h-14 w-14 items-center justify-center rounded-full"
          >
            <Image
              src={icon}
              alt=""
              aria-hidden="true"
              className="h-6 w-6 opacity-70 invert"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
