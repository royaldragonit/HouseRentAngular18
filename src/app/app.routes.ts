import { Routes } from '@angular/router';
import { RoomListComponent } from './room-list/room-list.component';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { MonthlyBillComponent } from './monthly-bill/monthly-bill.component';
import { AddOrEditTenantComponent } from './tenant-list/add-or-edit-tenant/add-or-edit-tenant.component';
export const routes: Routes = [
  { path: 'rooms', component: RoomListComponent },
  { path: 'tenants', component: TenantListComponent },
  { path: 'addOrEditTenant/:tenantId', component: AddOrEditTenantComponent },
  { path: 'monthly-bill', component: MonthlyBillComponent },
  { path: '', redirectTo: '/rooms', pathMatch: 'full' }
];
