export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full mt-auto px-6 pt-8 pb-10 flex flex-col items-center gap-4"
    >
      <div className="w-full max-w-md h-px bg-white/10" />
      <p className="font-mono text-[12px] text-[color:var(--color-accent)]/90 text-center">
        MIT License &nbsp;·&nbsp; © {new Date().getFullYear()} Erick Monteiro
      </p>
      <nav aria-label="Rodapé" className="font-mono text-[12px] text-white/60 flex items-center gap-6">
        <a href="https://github.com/erickpxd" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Github</a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="mailto:erick@example.com" className="hover:text-white transition-colors">Contato</a>
      </nav>
    </footer>
  );
}
