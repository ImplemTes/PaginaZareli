import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClavosComponent } from './clavos.component';

describe('ClavosComponent', () => {
  let component: ClavosComponent;
  let fixture: ComponentFixture<ClavosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClavosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClavosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
