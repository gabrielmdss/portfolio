import { afterNextRender, Component, DestroyRef, effect, ElementRef, inject, NgZone, viewChild } from '@angular/core';
import { IdiomaService } from '../../../../i18n/idioma.service';
import { RevelarDirective } from '../../../../animacoes/revelar.directive';

const VELOCIDADE_DIGITAR = 55; // ms por letra
const VELOCIDADE_APAGAR = 30;
const PAUSA_PALAVRA = 1800;

@Component({
  selector: 'app-informacoes-pessoais',
  imports: [RevelarDirective],
  templateUrl: './informacoes-pessoais.component.html',
  styleUrl: './informacoes-pessoais.component.css'
})
export class InformacoesPessoaisComponent {
  t = inject(IdiomaService).t;

  private digitado = viewChild.required<ElementRef<HTMLElement>>('digitado');
  private temporizador?: ReturnType<typeof setTimeout>;

  constructor() {
    const zone = inject(NgZone);
    const destroyRef = inject(DestroyRef);
    let pronto = false;

    afterNextRender(() => {
      pronto = true;
      zone.runOutsideAngular(() => this.iniciarDigitacao());
    });

    // Reinicia a animação quando o idioma muda
    effect(() => {
      this.t();
      if (pronto) {
        zone.runOutsideAngular(() => this.iniciarDigitacao());
      }
    });

    destroyRef.onDestroy(() => clearTimeout(this.temporizador));
  }

  /**
   * Escreve direto no DOM, fora da zona do Angular: a animação roda em loop e
   * não deve disparar detecção de mudanças nem impedir a hidratação de estabilizar.
   */
  private iniciarDigitacao(): void {
    clearTimeout(this.temporizador);
    const elemento = this.digitado().nativeElement;
    const palavras = this.t().sobre.especialidades;

    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elemento.textContent = palavras[0];
      return;
    }

    let indice = 0;
    let letras = palavras[0].length;
    let apagando = true;
    elemento.textContent = palavras[0];

    const passo = () => {
      const palavra = palavras[indice];
      letras += apagando ? -1 : 1;
      elemento.textContent = palavra.slice(0, letras);

      let espera = apagando ? VELOCIDADE_APAGAR : VELOCIDADE_DIGITAR;
      if (!apagando && letras === palavra.length) {
        apagando = true;
        espera = PAUSA_PALAVRA;
      } else if (apagando && letras === 0) {
        apagando = false;
        indice = (indice + 1) % palavras.length;
        espera = 300;
      }
      this.temporizador = setTimeout(passo, espera);
    };

    this.temporizador = setTimeout(passo, PAUSA_PALAVRA);
  }
}
