import { afterNextRender, Component, inject } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { BodyComponent } from '../components/body/body.component';
import { FooterComponent } from '../components/footer/footer.component';
import { IdiomaService } from '../i18n/idioma.service';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, BodyComponent, FooterComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio';

  constructor() {
    const idioma = inject(IdiomaService);
    // O HTML pré-renderizado é em inglês; no navegador aplica a preferência do visitante
    afterNextRender(() => idioma.inicializar());
  }
}
