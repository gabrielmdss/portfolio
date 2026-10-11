import {
  afterNextRender,
  booleanAttribute,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  input,
  NgZone,
} from '@angular/core';

const INCLINACAO_MAXIMA = 5; // graus

/**
 * Brilho que acompanha o cursor e, opcionalmente, leve inclinação 3D.
 * Só atua em dispositivos com mouse e sem "reduzir movimento".
 */
@Directive({
  selector: '[appInterativo]',
  host: { class: 'interativo' },
})
export class InterativoDirective {
  inclinar = input(false, { transform: booleanAttribute });

  constructor() {
    const elemento: HTMLElement = inject(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);
    const zone = inject(NgZone);

    afterNextRender(() => {
      const temMouse = matchMedia('(hover: hover) and (pointer: fine)').matches;
      const reduzirMovimento = matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!temMouse || reduzirMovimento) {
        return;
      }

      let quadro = 0;

      const aoMover = (evento: MouseEvent) => {
        cancelAnimationFrame(quadro);
        quadro = requestAnimationFrame(() => {
          const area = elemento.getBoundingClientRect();
          const x = evento.clientX - area.left;
          const y = evento.clientY - area.top;
          elemento.style.setProperty('--mx', `${x}px`);
          elemento.style.setProperty('--my', `${y}px`);

          if (this.inclinar()) {
            const rotY = (x / area.width - 0.5) * 2 * INCLINACAO_MAXIMA;
            const rotX = (0.5 - y / area.height) * 2 * INCLINACAO_MAXIMA;
            elemento.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
          }
        });
      };

      const aoSair = () => {
        cancelAnimationFrame(quadro);
        elemento.style.transform = '';
      };

      // Fora da zona: movimento do mouse não precisa disparar detecção de mudanças
      zone.runOutsideAngular(() => {
        elemento.addEventListener('mousemove', aoMover);
        elemento.addEventListener('mouseleave', aoSair);
      });

      destroyRef.onDestroy(() => {
        cancelAnimationFrame(quadro);
        elemento.removeEventListener('mousemove', aoMover);
        elemento.removeEventListener('mouseleave', aoSair);
      });
    });
  }
}
