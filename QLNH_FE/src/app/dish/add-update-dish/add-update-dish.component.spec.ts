import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateDishComponent } from './add-update-dish.component';

describe('AddUpdateDishComponent', () => {
  let component: AddUpdateDishComponent;
  let fixture: ComponentFixture<AddUpdateDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateDishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
