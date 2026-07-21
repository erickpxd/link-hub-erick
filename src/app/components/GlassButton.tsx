import Link from "next/link";
import type { ReactNode, SVGProps } from "react";

type Props = {
  href: string;
  icon?: (p: SVGProps<SVGSVGElement>) => React.ReactElement;
  children: ReactNode;
  external?: boolean;
  className?: string;
};

export default function GlassButton({ href, icon: Icon, children, external, className = "" }: Props) {
  const content = (
    <span className="flex items-center gap-3 w-full">
      {Icon ? (
        <span className="w-9 h-9 rounded-full flex items-center justify-center text-white/85 shrink-0">
          <Icon width={18} height={18} aria-hidden="true" />
        </span>
      ) : null}
      <span className="flex-1 text-center pr-9 text-[15px] font-medium">{children}</span>
    </span>
  );

  const cls = `glass glass-hover w-full rounded-[24px] px-4 py-3.5 flex items-center text-white ${className}`;

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
