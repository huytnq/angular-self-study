import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateMenuComponent } from './add-update-menu.component';

describe('AddUpdateMenuComponent', () => {
  let component: AddUpdateMenuComponent;
  let fixture: ComponentFixture<AddUpdateMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
