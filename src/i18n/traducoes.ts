export type Idioma = 'pt' | 'en';

/** Texto com uma versão para cada idioma suportado. */
export type Localizado = Record<Idioma, string>;

const pt = {
  meta: {
    titulo: 'Gabriel Mendes | Desenvolvedor Full Stack',
  },
  header: {
    sobre: 'Sobre',
    projetos: 'Projetos',
    habilidades: 'Habilidades',
    contato: 'Contato',
    abrirMenu: 'Abrir menu',
    fecharMenu: 'Fechar menu',
    idioma: 'Idioma',
  },
  sobre: {
    cargo: 'Desenvolvedor Full Stack',
    fotoAlt: 'Foto de perfil de Gabriel Mendes',
    bio:
      'Desenvolvedor de aplicações web e mobile com mais de 3 anos de experiência. ' +
      'Atualmente trabalho com <span>Node.js</span> e <span>TypeScript</span> no backend, ' +
      'criando APIs robustas e escaláveis.<br>No desenvolvimento mobile, utilizo ' +
      '<span>React Native</span> com <span>Expo</span> para criar aplicações nativas multiplataforma.',
    bio2:
      'Apaixonado por tecnologia e sempre em busca de novos desafios, focando em ' +
      'soluções eficientes e experiências de usuário excepcionais.',
  },
  projetos: {
    titulo: 'Projetos em Destaque',
    descricao: 'Alguns dos projetos que desenvolvi, de sistemas para clientes a aplicações open source',
    tecnologias: 'Tecnologias',
    codigo: 'Código',
    demo: 'Ver demo',
    site: 'Acessar site',
    privado: 'Projeto de cliente · código privado',
    avisoRender: 'Hospedado no plano gratuito do Render: o primeiro acesso pode levar alguns segundos.',
  },
  habilidades: {
    titulo: 'Habilidades Técnicas',
    descricao: 'Tecnologias e ferramentas que domino para criar soluções completas',
    outros: 'Outros',
  },
  contato: {
    titulo: 'Vamos Conversar?',
    descricao:
      'Estou sempre aberto a novas oportunidades e projetos interessantes. ' +
      'Entre em contato para discutirmos como posso ajudar!',
    chamada: 'Pronto para começar um projeto?',
    chamadaDescricao: 'Vamos transformar sua ideia em realidade com tecnologias modernas e eficientes.',
    botao: 'Entrar em contato',
  },
  footer: {
    texto: 'Desenvolvido com Angular e TypeScript.',
  },
};

export type Traducoes = typeof pt;

const en: Traducoes = {
  meta: {
    titulo: 'Gabriel Mendes | Full Stack Developer',
  },
  header: {
    sobre: 'About',
    projetos: 'Projects',
    habilidades: 'Skills',
    contato: 'Contact',
    abrirMenu: 'Open menu',
    fecharMenu: 'Close menu',
    idioma: 'Language',
  },
  sobre: {
    cargo: 'Full Stack Developer',
    fotoAlt: 'Profile photo of Gabriel Mendes',
    bio:
      'Web and mobile developer with over 3 years of experience. ' +
      'I currently work with <span>Node.js</span> and <span>TypeScript</span> on the backend, ' +
      'building robust and scalable APIs.<br>On mobile, I use ' +
      '<span>React Native</span> with <span>Expo</span> to build cross-platform native apps.',
    bio2:
      'Passionate about technology and always looking for new challenges, focused on ' +
      'efficient solutions and great user experiences.',
  },
  projetos: {
    titulo: 'Featured Projects',
    descricao: 'Some of the projects I have built, from client systems to open source applications',
    tecnologias: 'Technologies',
    codigo: 'Code',
    demo: 'Live demo',
    site: 'Visit website',
    privado: 'Client project · private code',
    avisoRender: 'Hosted on Render’s free tier: the first load may take a few seconds.',
  },
  habilidades: {
    titulo: 'Technical Skills',
    descricao: 'Technologies and tools I use to build end-to-end solutions',
    outros: 'Other',
  },
  contato: {
    titulo: 'Let’s Talk',
    descricao:
      'I’m always open to new opportunities and interesting projects. ' +
      'Get in touch and let’s discuss how I can help!',
    chamada: 'Ready to start a project?',
    chamadaDescricao: 'Let’s turn your idea into reality with modern, efficient technology.',
    botao: 'Get in touch',
  },
  footer: {
    texto: 'Built with Angular and TypeScript.',
  },
};

export const TRADUCOES: Record<Idioma, Traducoes> = { pt, en };
