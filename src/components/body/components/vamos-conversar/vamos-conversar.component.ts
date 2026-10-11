import { Component, inject } from '@angular/core';
import { IdiomaService } from '../../../../i18n/idioma.service';

@Component({
  selector: 'app-vamos-conversar',
  imports: [],
  templateUrl: './vamos-conversar.component.html',
  styleUrl: './vamos-conversar.component.css'
})
export class VamosConversarComponent {
  t = inject(IdiomaService).t;
}
