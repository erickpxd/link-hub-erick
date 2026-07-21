export default function Footer() {
  return (
    <footer
      id="contact"
      className="mx-auto mt-[60px] flex w-full max-w-[412px] flex-col items-center px-8 pb-8"
    >
      <div className="h-px w-full bg-white/10" />
      <p className="mt-5 text-center font-mono text-[12.5px] leading-5 text-[color:var(--color-accent)]/90">
        MIT License&nbsp; - &nbsp;© {new Date().getFullYear()} Erick Monteiro
      </p>
      <nav
        aria-label="Rodapé"
        className="mt-3 flex items-center gap-6 font-mono text-[12.5px] leading-5"
        style={{ color: "var(--interface-color)" }}
      >
        <a href="https://github.com/erickpxd" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Github</a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="mailto:erick@example.com" className="hover:text-white transition-colors">Contato</a>
      </nav>
    </footer>
  );
}
