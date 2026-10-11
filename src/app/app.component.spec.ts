import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { IdiomaService } from '../i18n/idioma.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'portfolio' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('portfolio');
  });

  it('should render the name in the h1', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Gabriel Mendes');
  });

  it('should switch the page language', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const idioma = TestBed.inject(IdiomaService);
    const compiled = fixture.nativeElement as HTMLElement;

    idioma.alterar('en');
    fixture.detectChanges();
    expect(compiled.querySelector('#projetos h2')?.textContent).toContain('Projects');

    idioma.alterar('pt');
    fixture.detectChanges();
    expect(compiled.querySelector('#projetos h2')?.textContent).toContain('Projetos');
    expect(document.documentElement.lang).toBe('pt-BR');
  });
});
