import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FierroComponent } from './fierro.component';

describe('FierroComponent', () => {
  let component: FierroComponent;
  let fixture: ComponentFixture<FierroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FierroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FierroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
