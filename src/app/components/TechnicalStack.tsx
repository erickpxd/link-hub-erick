import Image from "next/image";
import terminalIcon from "../assets/Iconterminal.png";

const stack = [
  "Angular18",
  "Java",
  "Spring Boot",
  "Next.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "MongoDB",
  "Docker",
];

export default function TechnicalStack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="flex w-full flex-col items-center px-8 pt-[41px]">
      <div className="mb-9 flex items-center gap-3">
        <Image src={terminalIcon} alt="" aria-hidden="true" className="h-4 w-5" />
        <h2
          id="stack-title"
          className="text-[16px] leading-5 font-normal text-white/85"
        >
          Technical Stack
        </h2>
      </div>

      <ul className="flex max-w-[330px] flex-wrap justify-center gap-2.5">
        {stack.map((tech) => (
          <li
            key={tech}
            className="glass flex h-[38px] items-center rounded-[24px] px-4 font-mono text-[13px] text-white/75"
          >
            {tech}
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="glass glass-hover flex h-[38px] items-center rounded-[24px] px-4 font-mono text-[13px] text-white/75"
          >
            Saiba Mais
          </a>
        </li>
      </ul>
    </section>
  );
}
