import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule
import { AgGridModule } from 'ag-grid-angular';
import { iconSubset } from './icons/icon-subset';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgScrollbar } from 'ngx-scrollbar';
import { DefaultFooterComponent } from './default-footer/default-footer.component';
import { DefaultHeaderComponent } from './default-header/default-header.component';
import { NgTemplateOutlet, NgStyle } from '@angular/common';
import { AppComponent } from './app.component';
import { RoomListComponent } from './room-list/room-list.component';
import { TenantListComponent } from './tenant-list/tenant-list.component'; // Component khác
import { routes } from './app.routes';
import { IconDirective } from '@coreui/icons-angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { CommonModule } from '@angular/common';
import { MonthlyBillComponent } from './monthly-bill/monthly-bill.component';
import {
  SidebarComponent,
  SidebarHeaderComponent,
  SidebarBrandComponent,
  SidebarNavComponent,
  SidebarFooterComponent,
  SidebarToggleDirective,
  SidebarTogglerDirective,
  ShadowOnScrollDirective,
  ContainerComponent,
  AvatarComponent,
  BadgeComponent,
  BreadcrumbRouterComponent,
  ColorModeService,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownHeaderDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  HeaderComponent,
  HeaderNavComponent,
  HeaderTogglerDirective,
  NavItemComponent,
  NavLinkDirective,
  ProgressBarDirective,
  ProgressComponent,
  TextColorDirective,
  ThemeDirective,
  SidebarNavHelper,
} from '@coreui/angular';
import { AddOrEditTenantComponent } from './tenant-list/add-or-edit-tenant/add-or-edit-tenant.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RoomListComponent,
    TenantListComponent,
    MonthlyBillComponent,
    DefaultHeaderComponent,
    DefaultFooterComponent,
    AddOrEditTenantComponent
  ], // Thêm các component vào declarations
  imports: [
    BrowserModule,
    CommonModule,
    SidebarComponent,
    NgScrollbar,
    SidebarHeaderComponent,
    SidebarBrandComponent,
    IconDirective,
    SidebarNavComponent,
    SidebarFooterComponent,
    SidebarToggleDirective,
    SidebarTogglerDirective,
    ShadowOnScrollDirective,
    ContainerComponent,
    NgStyle,
    ReactiveFormsModule,
    AvatarComponent,
    BadgeComponent,
    BreadcrumbRouterComponent,
    DropdownComponent,
    DropdownDividerDirective,
    DropdownHeaderDirective,
    DropdownItemDirective,
    DropdownMenuDirective,
    DropdownToggleDirective,
    HeaderComponent,
    HeaderNavComponent,
    HeaderTogglerDirective,
    NavItemComponent,
    NavLinkDirective,
    ProgressBarDirective,
    ProgressComponent,
    TextColorDirective,
    ThemeDirective,
    NgTemplateOutlet,
    AgGridModule,
    IconModule,
    BrowserAnimationsModule, 
    RouterModule.forRoot(routes), // Cấu hình routing
  ],
  providers:[
    ColorModeService,
    SidebarNavHelper,
    IconSetService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private iconSetService: IconSetService) {
    this.iconSetService.icons = { ...iconSubset };
  }
}
