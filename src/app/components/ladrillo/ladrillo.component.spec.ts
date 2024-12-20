import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadrilloComponent } from './ladrillo.component';

describe('LadrilloComponent', () => {
  let component: LadrilloComponent;
  let fixture: ComponentFixture<LadrilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LadrilloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LadrilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
