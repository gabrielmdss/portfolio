import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VamosConversarComponent } from './vamos-conversar.component';

describe('VamosConversarComponent', () => {
  let component: VamosConversarComponent;
  let fixture: ComponentFixture<VamosConversarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VamosConversarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VamosConversarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
