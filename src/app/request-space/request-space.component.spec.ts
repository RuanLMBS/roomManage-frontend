import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestSpaceComponent } from './request-space.component';

describe('RequestSpaceComponent', () => {
  let component: RequestSpaceComponent;
  let fixture: ComponentFixture<RequestSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestSpaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
