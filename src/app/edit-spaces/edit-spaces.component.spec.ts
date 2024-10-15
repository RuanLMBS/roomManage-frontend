import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSpacesComponent } from './edit-spaces.component';

describe('EditSpacesComponent', () => {
  let component: EditSpacesComponent;
  let fixture: ComponentFixture<EditSpacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSpacesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
