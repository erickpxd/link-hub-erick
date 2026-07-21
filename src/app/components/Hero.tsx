import Image from "next/image";
import emailIcon from "../assets/Iconemail.png";
import portfolioIcon from "../assets/Iconportifolio.png";
import projectsIcon from "../assets/Iconprojetos.png";
import heroBg from "../assets/image 3.png";
import profile from "../assets/minhafoto.png";
import SocialLinks from "./SocialLinks";
import GlassButton from "./GlassButton";
import RevealOnScroll from "./RevealOnScroll";

export default function Hero() {
  return (
    <section id="home" aria-label="Apresentação" className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[300px] overflow-hidden">
        <div className="relative h-full w-full [mask-image:linear-gradient(to_bottom,black_0%,black_70%,transparent_100%)]">
          <Image
            src={heroBg}
            alt=""
            fill
            priority
            aria-hidden="true"
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[412px] flex-col items-center pt-[54px]">

        {/* Profile photo */}
        <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full">
          <Image
            src={profile}
            alt="Erick Monteiro"
            fill
            priority
            className="object-cover object-center"
            sizes="200px"
          />
        </div>

        {/* Name + role */}
        <div className="mt-[14px] flex flex-col items-center px-4 text-center">
          <h1 className="text-[clamp(38px,11.65vw,48px)] leading-[1.1] font-bold tracking-[-0.04em]">
            Erick Monteiro
          </h1>
          <p className="mt-[3px] translate-y-[2px] text-[16px] leading-6 text-white/85">
            Software Engineer &amp; Web Developer
          </p>
        </div>

        {/* Divider */}
        <div className="mt-[18px] w-full px-8">
          <div className="h-px w-full bg-white/10" />
        </div>

        {/* Social */}
        <div className="mt-9 w-full px-8">
          <RevealOnScroll delay={60}>
            <SocialLinks />
          </RevealOnScroll>
        </div>

        {/* Buttons */}
        <div className="mt-9 flex w-full flex-col gap-4 px-8">
          <RevealOnScroll delay={120}>
            <GlassButton href="#portfolio" icon={portfolioIcon}>Portfolio</GlassButton>
          </RevealOnScroll>
          <RevealOnScroll delay={210}>
            <GlassButton href="#stack" icon={projectsIcon}>Projetos</GlassButton>
          </RevealOnScroll>
          <RevealOnScroll delay={300}>
            <GlassButton href="mailto:erick@example.com" icon={emailIcon} external>Email</GlassButton>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
