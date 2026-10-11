import { Localizado } from '../../../../i18n/traducoes';

export interface Repositorio {
  url: string;
  /** Usado quando o projeto tem mais de um repositório (ex.: Frontend / Backend). */
  rotulo?: string;
}

export interface Projeto {
  titulo: Localizado;
  descricao: Localizado;
  papel: Localizado;
  destaques: Localizado[];
  tecnologias: string[];
  repositorios: Repositorio[];
  demo?: { url: string; tipo: 'demo' | 'site' };
  /** Projetos com imagem aparecem em destaque, em cards maiores. */
  imagem?: string;
  /** Conta pública de demonstração (somente leitura). */
  credenciais?: { login: string; senha: string };
  /** Exibe aviso de cold start do plano gratuito do Render. */
  hospedadoNoRender?: boolean;
}

export const PROJETOS: Projeto[] = [
  {
    titulo: {
      pt: 'Entrega Certa - Gestão de Assistência Social',
      en: 'Entrega Certa - Social Assistance Management',
    },
    descricao: {
      pt:
        'Sistema completo para uma pastoral que distribui cestas básicas: lista de espera, ' +
        'admissão de famílias, distribuições mensais, check-in e retirada, estoque, montagem ' +
        'de cestas, relatórios e auditoria. É a segunda versão do projeto, reescrita do zero ' +
        'com autenticação, permissões por perfil e testes automatizados.',
      en:
        'End-to-end system for a non-profit that distributes food baskets: waiting list, family ' +
        'admission, monthly distributions, check-in and pickup, inventory, basket assembly, ' +
        'reports and audit trail. It is the second version of the project, rewritten from ' +
        'scratch with authentication, role-based permissions and automated tests.',
    },
    papel: {
      pt: 'Full stack: arquitetura, frontend, API, banco de dados e deploy',
      en: 'Full stack: architecture, frontend, API, database and deployment',
    },
    destaques: [
      {
        pt: 'Clean Architecture no frontend e na API (85 endpoints, 16 módulos)',
        en: 'Clean Architecture in both frontend and API (85 endpoints, 16 modules)',
      },
      {
        pt: 'Autenticação JWT e controle de acesso com 34 permissões',
        en: 'JWT authentication and role-based access control with 34 permissions',
      },
      {
        pt: '~150 testes na API, incluindo integração com PostgreSQL real e concorrência',
        en: '~150 API tests, including integration with real PostgreSQL and concurrency checks',
      },
      {
        pt: 'Documentação OpenAPI, logs estruturados e trilha de auditoria',
        en: 'OpenAPI docs, structured logging and audit trail',
      },
    ],
    tecnologias: ['Angular 21', 'Signals', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Zod', 'Vitest'],
    repositorios: [
      { url: 'https://github.com/gabrielmdss/pastoral_fronted', rotulo: 'Frontend' },
      { url: 'https://github.com/gabrielmdss/entrega_certa_backend_v3', rotulo: 'API' },
    ],
    demo: { url: 'https://pastoral-fronted-ashy.vercel.app', tipo: 'demo' },
    credenciais: { login: 'demo', senha: 'senhaTeste' },
    imagem: 'assets/projetos/entrega-certa-v2.webp',
    hospedadoNoRender: true,
  },
  {
    titulo: {
      pt: 'Madeira & Arte - Marcenaria Personalizada',
      en: 'Madeira & Arte - Custom Woodworking',
    },
    descricao: {
      pt:
        'Landing page para a marcenaria Madeira & Arte, criada para apresentar os serviços ' +
        'personalizados em madeira com preços de referência, formas de pagamento e um ' +
        'formulário para o cliente solicitar orçamento.',
      en:
        'Landing page for the Madeira & Arte woodworking shop, built to present its custom ' +
        'woodwork services with starting prices, payment options and a form for customers ' +
        'to request a quote.',
    },
    papel: {
      pt: 'Desenvolvimento completo, do layout ao deploy',
      en: 'End-to-end development, from layout to deployment',
    },
    destaques: [
      { pt: 'Catálogo de serviços com preços e prazos', en: 'Service catalog with prices and lead times' },
      { pt: 'Formas de pagamento e condições', en: 'Payment options and terms' },
      { pt: 'Formulário de solicitação de orçamento', en: 'Quote request form' },
      { pt: 'Renderização no servidor (SSR) e layout responsivo', en: 'Server-side rendering (SSR) and responsive layout' },
    ],
    tecnologias: ['Angular', 'SSR', 'TypeScript', 'CSS'],
    repositorios: [{ url: 'https://github.com/gabrielmdss/servicosPro' }],
    demo: { url: 'https://servicos-pro.vercel.app/', tipo: 'site' },
    imagem: 'assets/projetos/madeira-arte.webp',
  },
  {
    titulo: {
      pt: 'Entrega Certa v1 - Controle de Doações',
      en: 'Entrega Certa v1 - Donation Tracking',
    },
    descricao: {
      pt:
        'Primeira versão do Entrega Certa: cadastro de assistidos, registro de retiradas e ' +
        'controle de estoque, com dashboard de gráficos. Os documentos dos assistidos são ' +
        'criptografados em repouso (AES-256) e a busca usa hash HMAC.',
      en:
        'First version of Entrega Certa: beneficiary registration, pickup tracking and ' +
        'inventory, with a charts dashboard. Identity documents are encrypted at rest ' +
        '(AES-256) and lookups use an HMAC hash.',
    },
    papel: { pt: 'Full stack', en: 'Full stack' },
    destaques: [],
    tecnologias: ['Angular', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Chart.js'],
    repositorios: [
      { url: 'https://github.com/gabrielmdss/entregacerta-frontend', rotulo: 'Frontend' },
      { url: 'https://github.com/gabrielmdss/entregaCerta-backend', rotulo: 'API' },
    ],
    demo: { url: 'https://entregacerta-frontend.onrender.com/estoque', tipo: 'demo' },
    hospedadoNoRender: true,
  },
  {
    titulo: {
      pt: 'Migração de Sistema Legado',
      en: 'Legacy System Migration',
    },
    descricao: {
      pt:
        'Migração de um sistema legado em Java para uma arquitetura moderna com Angular no ' +
        'frontend e Node.js no backend, incluindo a integração com o sistema de emissão de ' +
        'nota fiscal eletrônica (NF-e).',
      en:
        'Migrated a legacy Java system to a modern architecture with Angular on the frontend ' +
        'and Node.js on the backend, including integration with Brazil’s electronic ' +
        'invoicing system (NF-e).',
    },
    papel: { pt: 'Full stack (freelance)', en: 'Full stack (freelance)' },
    destaques: [],
    tecnologias: ['Angular', 'Node.js', 'TypeScript', 'Express'],
    repositorios: [],
  },
  {
    titulo: {
      pt: 'Extensão Mobile de ERP Legado',
      en: 'Mobile Extension for a Legacy ERP',
    },
    descricao: {
      pt:
        'App multiplataforma que estende um ERP legado em Centura, dando acesso remoto a ' +
        'funcionalidades essenciais como consulta de dados e controle de pedidos, integrado ' +
        'ao backend existente.',
      en:
        'Cross-platform app that extends a legacy Centura ERP, giving remote access to core ' +
        'features such as data lookup and order management, integrated with the existing backend.',
    },
    papel: { pt: 'Desenvolvimento mobile (SGN)', en: 'Mobile development (SGN)' },
    destaques: [],
    tecnologias: ['React Native', 'Expo', 'TypeScript', 'Context API'],
    repositorios: [],
  },
  {
    titulo: {
      pt: 'App Mobile Integrado ao Sistema Apolo',
      en: 'Mobile App for the Apolo Clinic System',
    },
    descricao: {
      pt:
        'App multiplataforma integrado ao sistema Apolo, voltado para clínicas: gerencia ' +
        'agendamentos, fluxo de clientes e registro de atendimentos, otimizando a rotina dos ' +
        'profissionais de saúde.',
      en:
        'Cross-platform app integrated with the Apolo system for healthcare clinics: it ' +
        'manages appointments, patient flow and visit records, streamlining the daily ' +
        'routine of healthcare professionals.',
    },
    papel: { pt: 'Desenvolvimento mobile (SGN)', en: 'Mobile development (SGN)' },
    destaques: [],
    tecnologias: ['React Native', 'Expo', 'TypeScript'],
    repositorios: [],
  },
  {
    titulo: {
      pt: 'Streaming Multiplataforma - SOLID na Prática',
      en: 'Multi-platform Streaming - SOLID in Practice',
    },
    descricao: {
      pt:
        'API que cria serviços de transmissão para YouTube, Twitch e Facebook Live de forma ' +
        'dinâmica, aplicando Factory Method e os cinco princípios SOLID: novas plataformas ' +
        'entram sem alterar o código existente.',
      en:
        'API that dynamically creates streaming services for YouTube, Twitch and Facebook ' +
        'Live, applying the Factory Method pattern and all five SOLID principles: new ' +
        'platforms plug in without changing existing code.',
    },
    papel: { pt: 'Projeto open source', en: 'Open source project' },
    destaques: [],
    tecnologias: ['TypeScript', 'Node.js', 'Express', 'Swagger', 'SOLID', 'Factory Method'],
    repositorios: [{ url: 'https://github.com/gabrielmdss/solid-factory-streaming' }],
  },
];
