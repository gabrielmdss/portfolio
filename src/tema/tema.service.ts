import { DOCUMENT } from '@angular/common';
import { inject, Injectable, signal } from '@angular/core';

export type Tema = 'light' | 'dark';

const CHAVE_STORAGE = 'tema';

@Injectable({ providedIn: 'root' })
export class TemaService {
  private document = inject(DOCUMENT);

  readonly tema = signal<Tema>('light');

  /**
   * Deve ser chamado só no navegador. O script inline do index.html já aplicou
   * o tema antes da renderização (evita flash); aqui só sincroniza o estado.
   */
  inicializar(): void {
    const atual = this.document.documentElement.getAttribute('data-theme');
    this.tema.set(atual === 'dark' ? 'dark' : 'light');
  }

  alternar(): void {
    const novo: Tema = this.tema() === 'dark' ? 'light' : 'dark';
    const html = this.document.documentElement;

    html.classList.add('trocando-tema');
    html.setAttribute('data-theme', novo);
    setTimeout(() => html.classList.remove('trocando-tema'), 400);

    this.tema.set(novo);
    try {
      localStorage.setItem(CHAVE_STORAGE, novo);
    } catch {
      // storage indisponível: a escolha vale só para esta visita
    }
  }
}
