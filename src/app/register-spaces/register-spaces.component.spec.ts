import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSpacesComponent } from './register-spaces.component';

describe('RegisterSpacesComponent', () => {
  let component: RegisterSpacesComponent;
  let fixture: ComponentFixture<RegisterSpacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterSpacesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
