# erickmontdev — Link Hub

Link hub e portfólio pessoal de Erick Monteiro, Software Engineer & Web Developer.

O projeto reúne redes sociais, portfólio, projetos, contato e tecnologias em uma interface responsiva com identidade visual minimalista e dark glass.

## Funcionalidades

- apresentação inicial animada;
- hero com imagem decorativa e foto de perfil;
- atalhos para redes sociais;
- links para portfólio, projetos e contato;
- seção de tecnologias;
- animações de entrada conforme o conteúdo aparece na tela;
- layout responsivo para desktop e dispositivos móveis;
- navegação por teclado e suporte a preferência por movimento reduzido.

## Tecnologias

- Next.js 16;
- React 19;
- TypeScript;
- Tailwind CSS 4;
- CSS moderno com `backdrop-filter` e fallbacks;
- Geist e JetBrains Mono.

## Executando localmente

Requisitos: Node.js e npm.

```bash
git clone git@github.com:erickpxd/link-hub-erick.git
cd link-hub-erick
npm install
npm run dev
```

A aplicação ficará disponível em [http://localhost:3000](http://localhost:3000).

Para acessar o servidor por outro dispositivo na mesma rede:

```bash
npm run dev -- --hostname 0.0.0.0 --port 3002
```

## Scripts

```bash
npm run dev       # inicia o ambiente de desenvolvimento
npm run lint      # executa o ESLint
npm run build     # gera a exportação estática em out/ e dist/
npm run build:dev # gera novamente a exportação estática
```

## Estrutura principal

```text
src/app/
├── assets/       # imagens e ícones locais
├── components/   # componentes reutilizáveis da interface
├── globals.css   # tokens, glass system e animações
├── layout.tsx    # layout, fontes e metadados
└── page.tsx      # composição da página principal
```

## Design

A interface utiliza um sistema glass centralizado, com superfícies escuras semitransparentes, bordas internas discretas e blur moderado. Os estilos seguem tokens compartilhados para manter botões, chips e ícones sociais visualmente consistentes.

## Build e deploy

O projeto utiliza exportação estática do Next.js. Ao executar `npm run build`, o conteúdo de `out/` também é copiado para `dist/`, preservando o fluxo de publicação adotado pelo repositório.

## Autor

Desenvolvido por [Erick Monteiro](https://github.com/erickpxd).
