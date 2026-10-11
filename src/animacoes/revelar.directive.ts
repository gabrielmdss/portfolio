import { afterNextRender, DestroyRef, Directive, ElementRef, inject, input, numberAttribute } from '@angular/core';

/**
 * Faz o elemento surgir quando entra na tela.
 * Uso: `appRevelar` ou `[appRevelar]="120"` para atrasar (ms) e criar efeito cascata.
 */
@Directive({
  selector: '[appRevelar]',
  host: {
    class: 'revelar',
    '[style.--atraso]': "atraso() + 'ms'",
  },
})
export class RevelarDirective {
  atraso = input(0, { alias: 'appRevelar', transform: (valor: unknown) => numberAttribute(valor, 0) });

  constructor() {
    const elemento: HTMLElement = inject(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (!('IntersectionObserver' in window)) {
        elemento.classList.add('visivel');
        return;
      }

      const observer = new IntersectionObserver(
        (entradas) => {
          if (entradas.some((entrada) => entrada.isIntersecting)) {
            elemento.classList.add('visivel');
            observer.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
      );
      observer.observe(elemento);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
