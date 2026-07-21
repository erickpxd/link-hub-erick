import type { StaticImageData } from "next/image";
import githubIcon from "../assets/github-svgrepo-com.svg";
import gitlabIcon from "../assets/gitlab-svgrepo-com.svg";
import instagramIcon from "../assets/instagram-logo-facebook-2-svgrepo-com.svg";
import linkedinIcon from "../assets/linkedin-svgrepo-com.svg";
import youtubeIcon from "../assets/youtube-svgrepo-com.svg";

type Social = {
  label: string;
  href: string;
  icon: StaticImageData;
  iconSize: number;
};

const socials: Social[] = [
  { label: "Instagram", href: "https://instagram.com/", icon: instagramIcon, iconSize: 29 },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: linkedinIcon, iconSize: 24 },
  { label: "YouTube", href: "https://youtube.com/", icon: youtubeIcon, iconSize: 22 },
  { label: "GitHub", href: "https://github.com/erickpxd", icon: githubIcon, iconSize: 24 },
  { label: "GitLab", href: "https://gitlab.com/", icon: gitlabIcon, iconSize: 26 },
];

export default function SocialLinks() {
  return (
    <ul className="flex w-full flex-nowrap items-center justify-between">
      {socials.map(({ label, href, icon, iconSize }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="glass glass-circular glass-hover flex size-12 items-center justify-center min-[360px]:size-14"
          >
            <span
              aria-hidden="true"
              className="block scale-[0.857] min-[360px]:scale-100"
              style={{
                width: iconSize,
                height: iconSize,
                backgroundColor: "var(--interface-color)",
                WebkitMaskImage: `url(${icon.src})`,
                maskImage: `url(${icon.src})`,
                WebkitMaskPosition: "center",
                maskPosition: "center",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                maskSize: "contain",
              }}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
