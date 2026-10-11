import { Component, inject } from '@angular/core';
import { IdiomaService } from '../../../../i18n/idioma.service';
import { InterativoDirective } from '../../../../animacoes/interativo.directive';
import { RevelarDirective } from '../../../../animacoes/revelar.directive';

@Component({
  selector: 'app-vamos-conversar',
  imports: [RevelarDirective, InterativoDirective],
  templateUrl: './vamos-conversar.component.html',
  styleUrl: './vamos-conversar.component.css'
})
export class VamosConversarComponent {
  t = inject(IdiomaService).t;
}
