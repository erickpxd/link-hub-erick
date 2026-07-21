import type { StaticImageData } from "next/image";
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
      <span
        aria-hidden="true"
        className="size-[22px]"
        style={{
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
      <span
        className="text-center text-[16px] font-normal"
        style={{ color: "var(--interface-color)" }}
      >
        {children}
      </span>
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
