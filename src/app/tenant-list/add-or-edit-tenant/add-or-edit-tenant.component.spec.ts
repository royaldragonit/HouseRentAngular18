import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditTenantComponent } from './add-or-edit-tenant.component';

describe('AddOrEditTenantComponent', () => {
  let component: AddOrEditTenantComponent;
  let fixture: ComponentFixture<AddOrEditTenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddOrEditTenantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOrEditTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
