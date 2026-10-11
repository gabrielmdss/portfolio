export type Idioma = 'pt' | 'en';

/** Texto com uma versão para cada idioma suportado. */
export type Localizado = Record<Idioma, string>;

const pt = {
  meta: {
    titulo: 'Gabriel Mendes | Desenvolvedor Full Stack',
  },
  header: {
    sobre: 'Sobre',
    experiencia: 'Experiência',
    projetos: 'Projetos',
    habilidades: 'Habilidades',
    contato: 'Contato',
    abrirMenu: 'Abrir menu',
    fecharMenu: 'Fechar menu',
    idioma: 'Idioma',
  },
  sobre: {
    disponibilidade: 'Disponível para vagas remotas e projetos freelance',
    cargo: 'Desenvolvedor Full Stack · TypeScript · Node.js · React Native',
    fotoAlt: 'Foto de perfil de Gabriel Mendes',
    bio:
      'Desenvolvo APIs, aplicações web e apps mobile para empresas, com foco em ' +
      '<strong>modernizar sistemas legados</strong>. Na <strong>SGN</strong>, software house com ' +
      '<strong>mais de 160 clientes</strong>, entrego soluções que chegam a boa parte dessa base.',
    bio2:
      'Escrevo código pensando em quem vai mantê-lo: Clean Code, SOLID e Clean Architecture ' +
      'guiam como eu projeto e evoluo software.',
    localizacao: 'Brasil (UTC-3)',
    anosExperiencia: '3+ anos de experiência',
    ingles: 'Inglês intermediário (B1)',
    botaoContato: 'Entrar em contato',
  },
  experiencia: {
    titulo: 'Experiência',
    descricao: 'Onde venho construindo software que roda em produção para empresas reais.',
  },
  projetos: {
    titulo: 'Projetos',
    descricao: 'Sistemas para clientes e projetos open source. Os dois primeiros estão no ar: teste à vontade.',
    destaque: 'Em destaque',
    outros: 'Outros projetos',
    papel: 'Meu papel',
    tecnologias: 'Tecnologias',
    codigo: 'Código',
    demo: 'Ver demo',
    site: 'Acessar site',
    privado: 'Projeto de cliente · código privado',
    avisoRender: 'Hospedado no plano gratuito do Render: o primeiro acesso pode levar alguns segundos.',
    imagemAlt: 'Captura de tela do projeto',
  },
  habilidades: {
    titulo: 'Habilidades',
    descricao: 'As tecnologias que uso no dia a dia e os princípios que guiam meu código.',
    comoTrabalho: 'Como eu construo software',
  },
  contato: {
    titulo: 'Vamos trabalhar juntos?',
    descricao:
      'Estou aberto a vagas remotas em tempo integral e a projetos freelance. ' +
      'Se você está contratando ou tem um projeto em mente, me chame.',
    chamada: 'Contratando ou com um projeto em mente?',
    chamadaDescricao: 'Me mande um e-mail ou uma mensagem no LinkedIn.',
    botao: 'Enviar e-mail',
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
    experiencia: 'Experience',
    projetos: 'Projects',
    habilidades: 'Skills',
    contato: 'Contact',
    abrirMenu: 'Open menu',
    fecharMenu: 'Close menu',
    idioma: 'Language',
  },
  sobre: {
    disponibilidade: 'Open to remote roles and freelance projects',
    cargo: 'Full Stack Developer · TypeScript · Node.js · React Native',
    fotoAlt: 'Profile photo of Gabriel Mendes',
    bio:
      'I build APIs, web and mobile apps for businesses, with a focus on ' +
      '<strong>modernizing legacy systems</strong>. At <strong>SGN</strong>, a software company with ' +
      '<strong>160+ business clients</strong>, I ship solutions that reach a large share of that client base.',
    bio2:
      'I write code with the next maintainer in mind: Clean Code, SOLID and Clean Architecture ' +
      'guide how I design and evolve software.',
    localizacao: 'Brazil (UTC-3)',
    anosExperiencia: '3+ years of experience',
    ingles: 'Intermediate English (B1)',
    botaoContato: 'Get in touch',
  },
  experiencia: {
    titulo: 'Experience',
    descricao: 'Where I have been building production software for real businesses.',
  },
  projetos: {
    titulo: 'Projects',
    descricao: 'Client systems and open source work. The first two are live: feel free to try them.',
    destaque: 'Featured',
    outros: 'Other projects',
    papel: 'My role',
    tecnologias: 'Technologies',
    codigo: 'Code',
    demo: 'Live demo',
    site: 'Visit website',
    privado: 'Client project · private code',
    avisoRender: 'Hosted on Render’s free tier: the first load may take a few seconds.',
    imagemAlt: 'Project screenshot',
  },
  habilidades: {
    titulo: 'Skills',
    descricao: 'The technologies I use day to day and the principles behind my code.',
    comoTrabalho: 'How I build software',
  },
  contato: {
    titulo: 'Let’s work together',
    descricao:
      'I’m open to full-time remote positions and freelance projects. ' +
      'If you’re hiring or have a project in mind, reach out.',
    chamada: 'Hiring or have a project in mind?',
    chamadaDescricao: 'Send me an email or a message on LinkedIn.',
    botao: 'Send an email',
  },
  footer: {
    texto: 'Built with Angular and TypeScript.',
  },
};

export const TRADUCOES: Record<Idioma, Traducoes> = { pt, en };
