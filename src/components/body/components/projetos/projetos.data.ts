import { Localizado } from '../../../../i18n/traducoes';

export interface Repositorio {
  url: string;
  /** Usado quando o projeto tem mais de um repositório (ex.: Frontend / Backend). */
  rotulo?: string;
}

export interface Projeto {
  titulo: Localizado;
  descricao: Localizado;
  destaques: Localizado[];
  tecnologias: string[];
  repositorios: Repositorio[];
  demo?: { url: string; tipo: 'demo' | 'site' };
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
    destaques: [
      { pt: 'Portfólio de projetos', en: 'Project portfolio' },
      { pt: 'Catálogo de serviços', en: 'Service catalog' },
      { pt: 'Formulário de orçamento', en: 'Quote request form' },
      { pt: 'Integração com WhatsApp e redes sociais', en: 'WhatsApp and social media integration' },
    ],
    tecnologias: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    repositorios: [{ url: 'https://github.com/gabrielmdss/servicosPro' }],
    demo: { url: 'https://servicos-pro.vercel.app/', tipo: 'site' },
  },
  {
    titulo: {
      pt: 'Migração de Sistema Legado',
      en: 'Legacy System Migration',
    },
    descricao: {
      pt:
        'Projeto realizado para uma empresa, migrando um sistema legado em Java para uma ' +
        'arquitetura moderna com Angular no frontend e Node.js no backend, incluindo a ' +
        'integração com o sistema de emissão de nota fiscal eletrônica (NF-e).',
      en:
        'Client project migrating a legacy Java system to a modern architecture with Angular ' +
        'on the frontend and Node.js on the backend, including integration with Brazil’s ' +
        'electronic invoicing system (NF-e).',
    },
    destaques: [
      { pt: 'Migração de Java para Angular + Node.js', en: 'Migration from Java to Angular + Node.js' },
      { pt: 'Integração com emissão de NF-e', en: 'Electronic invoice (NF-e) integration' },
    ],
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
        'Aplicativo multiplataforma que estende um ERP legado desenvolvido em Centura, ' +
        'permitindo acesso remoto a funcionalidades essenciais como visualização de dados ' +
        'e controle de pedidos, integrado ao backend existente.',
      en:
        'Cross-platform app that extends a legacy ERP built in Centura, giving remote access ' +
        'to core features such as data lookup and order management, integrated with the ' +
        'existing backend.',
    },
    destaques: [
      { pt: 'Integração com ERP legado em Centura', en: 'Integration with a legacy Centura ERP' },
      { pt: 'Consulta de dados e controle de pedidos', en: 'Data lookup and order management' },
    ],
    tecnologias: ['React Native', 'Expo', 'TypeScript', 'Context API'],
    repositorios: [],
  },
  {
    titulo: {
      pt: 'App Mobile Integrado ao Sistema Apolo',
      en: 'Mobile App Integrated with the Apolo System',
    },
    descricao: {
      pt:
        'Aplicativo multiplataforma integrado ao sistema Apolo, voltado para clínicas: ' +
        'gerencia agendamentos, fluxo de clientes e registro de atendimentos, otimizando ' +
        'a rotina dos profissionais de saúde.',
      en:
        'Cross-platform app integrated with the Apolo system for healthcare clinics: it ' +
        'manages appointments, patient flow and visit records, streamlining the daily ' +
        'routine of healthcare professionals.',
    },
    destaques: [
      { pt: 'Gerenciamento de agendamentos', en: 'Appointment scheduling' },
      { pt: 'Controle de fluxo de clientes', en: 'Patient flow control' },
      { pt: 'Registro de atendimentos', en: 'Visit records' },
    ],
    tecnologias: ['React Native', 'Expo', 'TypeScript'],
    repositorios: [],
  },
  {
    titulo: {
      pt: 'Sistema de Folha de Pagamento',
      en: 'Payroll System',
    },
    descricao: {
      pt:
        'Sistema web para gestão de folha de pagamento, com cálculo de salários, descontos ' +
        'e benefícios e geração de relatórios mensais para a área administrativa.',
      en:
        'Web-based payroll management system that calculates salaries, deductions and ' +
        'benefits and generates monthly reports for the administrative team.',
    },
    destaques: [
      { pt: 'Cálculo de salários, descontos e benefícios', en: 'Salary, deduction and benefit calculation' },
      { pt: 'Relatórios mensais', en: 'Monthly reports' },
    ],
    tecnologias: ['JavaScript', 'jQuery', 'PHP'],
    repositorios: [],
  },
];
