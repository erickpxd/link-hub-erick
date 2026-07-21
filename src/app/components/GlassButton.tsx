import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  icon: StaticImageData;
  children: ReactNode;
  external?: boolean;
  className?: string;
};

export default function GlassButton({ href, icon, children, external, className = "" }: Props) {
  const content = (
    <span className="grid w-full grid-cols-[22px_1fr_22px] items-center">
      <Image src={icon} alt="" aria-hidden="true" className="h-auto w-[22px]" />
      <span className="text-center text-[16px] font-normal text-white/70">{children}</span>
      <span aria-hidden="true" />
    </span>
  );

  const cls = `glass glass-hover flex h-[54px] w-full items-center rounded-[24px] px-[29px] text-white ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
