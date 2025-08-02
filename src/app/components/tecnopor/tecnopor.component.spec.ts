import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnoporComponent } from './tecnopor.component';

describe('TecnoporComponent', () => {
  let component: TecnoporComponent;
  let fixture: ComponentFixture<TecnoporComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecnoporComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TecnoporComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
