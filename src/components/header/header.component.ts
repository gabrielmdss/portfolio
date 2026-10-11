import { CommonModule } from '@angular/common';
import {
  afterNextRender,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  NgZone,
  signal,
  viewChild,
} from '@angular/core';
import { IdiomaService } from '../../i18n/idioma.service';
import { Idioma } from '../../i18n/traducoes';
import { TemaService } from '../../tema/tema.service';

const SECOES = ['sobre', 'experiencia', 'projetos', 'habilidades', 'contato'];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [CommonModule],
  standalone: true,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  private idiomaService = inject(IdiomaService);
  private temaService = inject(TemaService);
  idioma = this.idiomaService.idioma;
  t = this.idiomaService.t;
  tema = this.temaService.tema;

  menuAberto = false;
  secaoAtiva = signal('sobre');
  mostrarVoltarTopo = signal(false);

  private barraProgresso = viewChild.required<ElementRef<HTMLElement>>('barraProgresso');

  constructor() {
    const zone = inject(NgZone);
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      this.temaService.inicializar();

      // Scroll: atualiza a barra direto no DOM e só entra na zona quando o botão muda
      let quadro = 0;
      const aoRolar = () => {
        cancelAnimationFrame(quadro);
        quadro = requestAnimationFrame(() => {
          const total = document.documentElement.scrollHeight - window.innerHeight;
          const progresso = total > 0 ? window.scrollY / total : 0;
          this.barraProgresso().nativeElement.style.transform = `scaleX(${progresso})`;

          const mostrar = window.scrollY > 600;
          if (mostrar !== this.mostrarVoltarTopo()) {
            zone.run(() => this.mostrarVoltarTopo.set(mostrar));
          }
        });
      };

      // Destaca no menu a seção que está no meio da tela
      const observer = new IntersectionObserver(
        (entradas) => {
          const visivel = entradas.find((entrada) => entrada.isIntersecting);
          if (visivel) {
            zone.run(() => this.secaoAtiva.set(visivel.target.id));
          }
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );

      zone.runOutsideAngular(() => window.addEventListener('scroll', aoRolar, { passive: true }));
      SECOES.forEach((id) => {
        const secao = document.getElementById(id);
        if (secao) observer.observe(secao);
      });
      aoRolar();

      destroyRef.onDestroy(() => {
        window.removeEventListener('scroll', aoRolar);
        observer.disconnect();
        cancelAnimationFrame(quadro);
      });
    });
  }

  toggleMenu(): void {
    this.menuAberto = !this.menuAberto;
  }

  fecharMenu(): void {
    this.menuAberto = false;
  }

  alterarIdioma(idioma: Idioma): void {
    this.idiomaService.alterar(idioma);
  }

  alternarTema(): void {
    this.temaService.alternar();
  }

  voltarAoTopo(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
