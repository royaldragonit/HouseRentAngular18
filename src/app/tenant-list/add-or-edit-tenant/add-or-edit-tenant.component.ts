import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TenantService } from '../../services/tenant.service';

@Component({
  selector: 'app-add-or-edit-tenant',
  templateUrl: './add-or-edit-tenant.component.html',
  styleUrl: './add-or-edit-tenant.component.css'
})
export class AddOrEditTenantComponent implements OnInit {
  tenantForm: FormGroup;
  tenantId: string | null = null;
  rooms = [
    { RoomID: 1, RoomCode: 'A101' },
    { RoomID: 2, RoomCode: 'B202' },
    { RoomID: 3, RoomCode: 'C303' },
  ]; // Bạn có thể lấy dữ liệu này từ API

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private tenantService: TenantService // Giả định service để tương tác với API
  ) {
    this.tenantForm = this.fb.group({
      fullName: ['', Validators.required],
      idCard: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      occupation: [''],
      relativeName: [''],
      relativePhone: [''],
      roomID: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Lấy tenantId từ URL (nếu có)
    this.tenantId = this.route.snapshot.paramMap.get('tenantId');

    if (this.tenantId) {
      // Chế độ chỉnh sửa: gọi API lấy thông tin tenant
      this.loadTenantData(this.tenantId);
    }
  }

  loadTenantData(tenantId: string): void {
    this.tenantService.getTenantById(tenantId).subscribe((tenantData) => {
      // Binding dữ liệu lấy được từ API vào form
      this.tenantForm.patchValue({
        fullName: tenantData.fullName,
        idCard: tenantData.idCard,
        phoneNumber: tenantData.phoneNumber,
        occupation: tenantData.occupation,
        relativeName: tenantData.relativeName,
        relativePhone: tenantData.relativePhone,
        roomID: tenantData.roomID,
      });
    });
  }

  onSubmit(): void {
    if (this.tenantForm.valid) {
      const tenantData = this.tenantForm.value;

      if (this.tenantId) {
        // Chế độ chỉnh sửa
        this.tenantService.updateTenant(this.tenantId, tenantData).subscribe(() => {
          console.log('Tenant updated successfully');
        });
      } else {
        // Chế độ thêm mới
        this.tenantService.addTenant(tenantData).subscribe(() => {
          console.log('Tenant added successfully');
        });
      }
    }
  }
}
