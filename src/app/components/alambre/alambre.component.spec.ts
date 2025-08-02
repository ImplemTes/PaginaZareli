import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlambreComponent } from './alambre.component';

describe('AlambreComponent', () => {
  let component: AlambreComponent;
  let fixture: ComponentFixture<AlambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlambreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
