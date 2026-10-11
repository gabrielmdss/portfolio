import { Component, inject } from '@angular/core';
import { IdiomaService } from '../../../../i18n/idioma.service';
import { InterativoDirective } from '../../../../animacoes/interativo.directive';
import { RevelarDirective } from '../../../../animacoes/revelar.directive';
import { Localizado } from '../../../../i18n/traducoes';

interface Categoria {
  nome: Localizado;
  itens: string[];
}

interface Principio {
  icone: string;
  titulo: string;
  descricao: Localizado;
}

@Component({
  selector: 'app-habilidades',
  imports: [RevelarDirective, InterativoDirective],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})
export class HabilidadesComponent {
  private idiomaService = inject(IdiomaService);
  idioma = this.idiomaService.idioma;
  t = this.idiomaService.t;

  categorias: Categoria[] = [
    { nome: { pt: 'Backend', en: 'Backend' }, itens: ['Node.js', 'TypeScript', 'Express', 'RESTful APIs', 'JWT', 'Zod', 'Prisma', 'Swagger / OpenAPI', 'Pino'] },
    { nome: { pt: 'Frontend', en: 'Frontend' }, itens: ['Angular', 'Signals', 'RxJS', 'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
    { nome: { pt: 'Mobile', en: 'Mobile' }, itens: ['React Native', 'Expo', 'Context API', 'AsyncStorage'] },
    { nome: { pt: 'Bancos de dados', en: 'Databases' }, itens: ['PostgreSQL', 'SQL Server'] },
    { nome: { pt: 'Testes', en: 'Testing' }, itens: ['Vitest', 'Supertest', 'Jasmine', 'Karma', 'node:test'] },
    {
      nome: { pt: 'Boas práticas', en: 'Practices' },
      itens: ['Clean Code', 'SOLID', 'Clean Architecture', 'Design Patterns', 'REST API Design', 'RBAC'],
    },
    { nome: { pt: 'Ferramentas', en: 'Tools' }, itens: ['Git', 'GitHub', 'ESLint', 'Postman', 'Vercel', 'Render'] },
  ];

  principios: Principio[] = [
    {
      icone: 'fa-solid fa-broom',
      titulo: 'Clean Code',
      descricao: {
        pt: 'Nomes claros, funções pequenas e código que se explica sozinho. Legibilidade vem antes de esperteza.',
        en: 'Clear names, small functions and self-explanatory code. Readability comes before cleverness.',
      },
    },
    {
      icone: 'fa-solid fa-cubes',
      titulo: 'SOLID & Design Patterns',
      descricao: {
        pt: 'Responsabilidades bem definidas e dependência de abstrações, para estender sem quebrar o que já funciona.',
        en: 'Well-defined responsibilities and depending on abstractions, so code can be extended without breaking what works.',
      },
    },
    {
      icone: 'fa-solid fa-layer-group',
      titulo: 'Clean Architecture',
      descricao: {
        pt: 'Regras de negócio isoladas de frameworks e banco de dados, facilitando testes, manutenção e migrações.',
        en: 'Business rules isolated from frameworks and databases, making testing, maintenance and migrations easier.',
      },
    },
  ];
}
