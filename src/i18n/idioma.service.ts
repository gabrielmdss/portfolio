import { DOCUMENT } from '@angular/common';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Idioma, TRADUCOES } from './traducoes';

const CHAVE_STORAGE = 'idioma';

@Injectable({ providedIn: 'root' })
export class IdiomaService {
  private document = inject(DOCUMENT);
  private titulo = inject(Title);

  /** Inglês é o padrão: é o idioma do HTML pré-renderizado. */
  readonly idioma = signal<Idioma>('en');
  readonly t = computed(() => TRADUCOES[this.idioma()]);

  constructor() {
    effect(() => {
      const idioma = this.idioma();
      this.document.documentElement.lang = idioma === 'pt' ? 'pt-BR' : 'en';
      this.titulo.setTitle(TRADUCOES[idioma].meta.titulo);
    });
  }

  /** Deve ser chamado só no navegador: usa a escolha salva ou o idioma do navegador. */
  inicializar(): void {
    const salvo = this.lerStorage();
    if (salvo) {
      this.idioma.set(salvo);
    } else if (navigator.language?.toLowerCase().startsWith('pt')) {
      this.idioma.set('pt');
    }
  }

  alterar(idioma: Idioma): void {
    this.idioma.set(idioma);
    try {
      localStorage.setItem(CHAVE_STORAGE, idioma);
    } catch {
      // storage indisponível (modo privado etc.): a escolha vale só para esta visita
    }
  }

  private lerStorage(): Idioma | null {
    try {
      const valor = localStorage.getItem(CHAVE_STORAGE);
      return valor === 'pt' || valor === 'en' ? valor : null;
    } catch {
      return null;
    }
  }
}
