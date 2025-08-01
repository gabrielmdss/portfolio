import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesPessoaisComponent } from './informacoes-pessoais.component';

describe('InformacoesPessoaisComponent', () => {
  let component: InformacoesPessoaisComponent;
  let fixture: ComponentFixture<InformacoesPessoaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacoesPessoaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacoesPessoaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
