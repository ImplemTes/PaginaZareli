import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CementoComponent } from './cemento.component';

describe('CementoComponent', () => {
  let component: CementoComponent;
  let fixture: ComponentFixture<CementoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CementoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
