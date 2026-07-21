export default function Navbar() {
  return (
    <header className="w-full flex justify-center px-4 pt-6">
      <nav
        aria-label="Navegação principal"
        className="glass glass-hover rounded-[24px] px-4 py-2.5 flex items-center gap-1 text-sm"
      >
        <span
          className="font-mono text-[11px] tracking-widest text-white/60 pl-2 pr-3 uppercase"
          aria-hidden="true"
        >
          EM
        </span>
        <a
          href="#home"
          className="px-3 py-1.5 rounded-full text-white/80 hover:text-white transition-colors"
        >
          Início
        </a>
        <a
          href="#stack"
          className="px-3 py-1.5 rounded-full text-white/80 hover:text-white transition-colors"
        >
          Stack
        </a>
        <a
          href="#contact"
          className="px-3 py-1.5 rounded-full text-white/80 hover:text-white transition-colors"
        >
          Contato
        </a>
      </nav>
    </header>
  );
}
