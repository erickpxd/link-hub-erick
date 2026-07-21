export default function Navbar() {
  return (
    <header className="w-full flex justify-center px-4 pt-6">
      <nav
        aria-label="Navegação principal"
        className="glass glass-hover rounded-[24px] px-4 py-2.5 flex items-center gap-1 text-sm"
      >
        <span
          className="font-mono text-[11px] tracking-widest pl-2 pr-3 uppercase"
          style={{ color: "var(--interface-color)" }}
          aria-hidden="true"
        >
          EM
        </span>
        <a
          href="#home"
          className="px-3 py-1.5 rounded-full hover:text-white transition-colors"
          style={{ color: "var(--interface-color)" }}
        >
          Início
        </a>
        <a
          href="#stack"
          className="px-3 py-1.5 rounded-full hover:text-white transition-colors"
          style={{ color: "var(--interface-color)" }}
        >
          Stack
        </a>
        <a
          href="#contact"
          className="px-3 py-1.5 rounded-full hover:text-white transition-colors"
          style={{ color: "var(--interface-color)" }}
        >
          Contato
        </a>
      </nav>
    </header>
  );
}
