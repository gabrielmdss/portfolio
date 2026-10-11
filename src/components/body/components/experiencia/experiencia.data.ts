import { Localizado } from '../../../../i18n/traducoes';

export interface Experiencia {
  empresa: string;
  cargo: Localizado;
  periodo: Localizado;
  resumo: Localizado;
  conquistas: Localizado[];
  tecnologias: string[];
}

export const EXPERIENCIAS: Experiencia[] = [
  {
    empresa: 'SGN',
    cargo: { pt: 'Desenvolvedor Full Stack', en: 'Full Stack Developer' },
    periodo: { pt: 'Atual · 3+ anos', en: 'Present · 3+ years' },
    resumo: {
      pt:
        'Software house com mais de 160 empresas clientes. Minha primeira e atual empresa, ' +
        'onde desenvolvo e mantenho produtos usados por boa parte dessa base.',
      en:
        'Software company serving 160+ business clients. My first and current role, where I ' +
        'build and maintain products used by a large share of that client base.',
    },
    conquistas: [
      {
        pt: 'Desenvolvimento de APIs RESTful e serviços backend com Node.js, TypeScript e Express.',
        en: 'Build RESTful APIs and backend services with Node.js, TypeScript and Express.',
      },
      {
        pt:
          'Criação de apps mobile multiplataforma (React Native + Expo) que estendem um ERP ' +
          'legado em Centura e se integram ao sistema Apolo, voltado para clínicas.',
        en:
          'Built cross-platform mobile apps (React Native + Expo) that extend a legacy Centura ' +
          'ERP and integrate with the Apolo clinic management system.',
      },
      {
        pt:
          'Evolução de sistemas legados para stacks modernas, de forma incremental e sem ' +
          'interromper a operação dos clientes.',
        en:
          'Incrementally evolve legacy systems toward modern stacks without disrupting ' +
          'clients’ day-to-day operations.',
      },
    ],
    tecnologias: ['Node.js', 'TypeScript', 'Express', 'React Native', 'Expo', 'SQL Server'],
  },
  {
    empresa: 'Freelance',
    cargo: { pt: 'Desenvolvedor Full Stack', en: 'Full Stack Developer' },
    periodo: { pt: 'Projetos sob demanda', en: 'Project-based' },
    resumo: {
      pt: 'Projetos de ponta a ponta para empresas e organizações, do levantamento ao deploy.',
      en: 'End-to-end projects for companies and organizations, from requirements to deployment.',
    },
    conquistas: [
      {
        pt: 'Migração de um sistema legado em Java para Angular + Node.js, com integração de NF-e.',
        en: 'Migrated a legacy Java system to Angular + Node.js, including NF-e (e-invoice) integration.',
      },
      {
        pt: 'Sistema de gestão de doações e estoque para uma ONG, em produção.',
        en: 'Donation and inventory management system for a non-profit, live in production.',
      },
      {
        pt: 'Site institucional para uma marcenaria, com portfólio e captação de orçamentos.',
        en: 'Business website for a woodworking shop, with portfolio and quote requests.',
      },
    ],
    tecnologias: ['Angular', 'Node.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
  },
];
