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
  /** Exibe aviso de cold start do plano gratuito do Render. */
  hospedadoNoRender?: boolean;
}

export const PROJETOS: Projeto[] = [
  {
    titulo: {
      pt: 'Entrega Certa - Gestão de Doações',
      en: 'Entrega Certa - Donation Management',
    },
    descricao: {
      pt:
        'Sistema web desenvolvido para uma ONG que distribui cestas básicas. Centraliza o ' +
        'controle de estoque, o cadastro de assistidos e a lista de espera, trazendo ' +
        'organização e rastreabilidade para todo o processo de doação e entrega.',
      en:
        'Web application built for a non-profit that distributes food baskets. It centralizes ' +
        'inventory control, beneficiary registration and the waiting list, bringing ' +
        'organization and traceability to the entire donation and delivery process.',
    },
    papel: {
      pt: 'Full stack: arquitetura, frontend, API e deploy',
      en: 'Full stack: architecture, frontend, API and deployment',
    },
    destaques: [
      { pt: 'Controle de estoque de cestas', en: 'Food basket inventory control' },
      { pt: 'Cadastro e gerenciamento de assistidos', en: 'Beneficiary registration and management' },
      { pt: 'Lista de espera e controle de capacidade', en: 'Waiting list and capacity control' },
      { pt: 'Histórico e relatórios de entregas', en: 'Delivery history and reports' },
    ],
    tecnologias: ['Angular', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
    repositorios: [
      { url: 'https://github.com/gabrielmdss/pastoral_fronted', rotulo: 'Frontend' },
      { url: 'https://github.com/gabrielmdss/entregaCerta-backend', rotulo: 'Backend' },
    ],
    demo: { url: 'https://entregacerta-frontend.onrender.com/estoque', tipo: 'demo' },
    imagem: 'assets/projetos/entrega-certa.webp',
    hospedadoNoRender: true,
  },
  {
    titulo: {
      pt: 'Madeira & Arte - Marcenaria Personalizada',
      en: 'Madeira & Arte - Custom Woodworking',
    },
    descricao: {
      pt:
        'Site institucional para a marcenaria Madeira & Arte, criado para apresentar os ' +
        'serviços personalizados em madeira, divulgar o portfólio e direcionar clientes ' +
        'para orçamento e contato via redes sociais.',
      en:
        'Business website for the Madeira & Arte woodworking shop, built to showcase its ' +
        'custom woodwork services and portfolio, and to drive customers to request quotes ' +
        'and get in touch through social media.',
    },
    papel: {
      pt: 'Desenvolvimento completo, do layout ao deploy',
      en: 'End-to-end development, from layout to deployment',
    },
    destaques: [
      { pt: 'Portfólio de projetos', en: 'Project portfolio' },
      { pt: 'Catálogo de serviços', en: 'Service catalog' },
      { pt: 'Formulário de orçamento', en: 'Quote request form' },
      { pt: 'Integração com WhatsApp e redes sociais', en: 'WhatsApp and social media integration' },
    ],
    tecnologias: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    repositorios: [{ url: 'https://github.com/gabrielmdss/servicosPro' }],
    demo: { url: 'https://servicos-pro.vercel.app/', tipo: 'site' },
    imagem: 'assets/projetos/madeira-arte.webp',
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
