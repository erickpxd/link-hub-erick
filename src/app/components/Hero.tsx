import Image from "next/image";
import heroBg from "../assets/hero-bg.jpg";
import profile from "../assets/profile.jpg";
import SocialLinks from "./SocialLinks";
import GlassButton from "./GlassButton";

const FolderIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);
const CodeIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
  </svg>
);
const MailIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export default function Hero() {
  return (
    <section id="home" aria-label="Apresentação" className="relative w-full">
      {/* Decorative background */}
      <div className="relative w-full flex flex-col items-center pt-8 pb-10">
        <div className="absolute inset-x-0 top-0 h-[340px] overflow-hidden -z-10 pointer-events-none">
          <Image
            src={heroBg}
            alt=""
            fill
            priority
            aria-hidden="true"
            className="object-cover opacity-70"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(6,29,27,0.35) 0%, rgba(6,29,27,0.85) 70%, #061D1B 100%)",
            }}
          />
        </div>

        {/* Profile photo */}
        <div className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
          <Image
            src={profile}
            alt="Erick Monteiro"
            fill
            priority
            className="object-cover"
            sizes="200px"
          />
        </div>

        {/* Name + role */}
        <div className="mt-6 flex flex-col items-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Erick Monteiro
          </h1>
          <p className="mt-3 text-white/70 text-[15px] sm:text-base max-w-md">
            Software Engineer &amp; Web Developer
          </p>
          <p className="mt-2 text-white/50 text-sm max-w-md font-mono">
            construindo produtos web modernos, rápidos e elegantes.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-8 w-full max-w-md px-6">
          <div className="h-px w-full bg-white/10" />
        </div>

        {/* Social */}
        <div className="mt-8 px-4">
          <SocialLinks />
        </div>

        {/* Buttons */}
        <div className="mt-8 w-full max-w-md px-6 flex flex-col gap-3">
          <GlassButton href="#portfolio" icon={FolderIcon}>Portfolio</GlassButton>
          <GlassButton href="#stack" icon={CodeIcon}>Projetos</GlassButton>
          <GlassButton href="mailto:erick@example.com" icon={MailIcon} external>Email</GlassButton>
        </div>
      </div>
    </section>
  );
}
