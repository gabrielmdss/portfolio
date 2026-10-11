import { Component, inject } from '@angular/core';
import { IdiomaService } from '../../../../i18n/idioma.service';

@Component({
  selector: 'app-habilidades',
  imports: [],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})
export class HabilidadesComponent {
  t = inject(IdiomaService).t;

  front = ['Angular', 'React', 'TypeScript', 'JavaScript'];
  back = ['Node.js', 'TypeScript', 'Express.js', 'RESTful APIs'];
  mobile = ['React Native', 'Expo', 'TypeScript', 'AsyncStorage'];
  outros = ['SQL Server', 'PostgreSQL', 'Git', 'Postman'];
}
