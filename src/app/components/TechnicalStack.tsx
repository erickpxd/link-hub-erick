const stack = [
  "Angular",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "MongoDB",
  "Docker",
];

const TerminalIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="m5 8 4 4-4 4M12 16h7" />
  </svg>
);

export default function TechnicalStack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="w-full flex flex-col items-center px-6 py-14">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-[color:var(--color-accent)]" aria-hidden="true">
          <TerminalIcon width={18} height={18} />
        </span>
        <h2
          id="stack-title"
          className="font-mono text-[13px] uppercase tracking-[0.15em] text-white/85"
        >
          Technical Stack
        </h2>
      </div>

      <ul className="flex flex-wrap justify-center gap-2.5 max-w-lg">
        {stack.map((tech) => (
          <li
            key={tech}
            className="glass rounded-[24px] px-4 py-2 text-sm text-white/85 font-mono"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <a
          href="#contact"
          className="glass glass-hover inline-flex items-center rounded-[24px] px-5 py-2.5 text-sm text-white/90"
        >
          Saiba Mais
        </a>
      </div>
    </section>
  );
}
