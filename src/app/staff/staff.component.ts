import { Component } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {
  // Dữ liệu mẫu của nhân viên
  rowData = [
    { fullName: 'Nguyễn Văn A', idCard: '123456789', salary: 15000000, startDate: '2023-01-10' },
    { fullName: 'Trần Thị B', idCard: '987654321', salary: 12000000, startDate: '2022-05-15' },
    { fullName: 'Lê Văn C', idCard: '456789123', salary: 18000000, startDate: '2021-09-20' },
  ];

  // Định nghĩa các cột cho AG Grid
  colDefs: ColDef[] = [
    { field: 'fullName', headerName: 'Họ tên', sortable: true, filter: true, flex: 1 },
    { field: 'idCard', headerName: 'CCCD', sortable: true, filter: true, flex: 1 },
    { 
      field: 'salary', 
      headerName: 'Mức lương', 
      sortable: true, 
      filter: true, 
      flex: 1,
      valueFormatter: (params) => `${params.value.toLocaleString('vi-VN')} VND` // Định dạng tiền tệ
    },
    { 
      field: 'startDate', 
      headerName: 'Ngày vào làm', 
      sortable: true, 
      filter: true, 
      flex: 1,
      valueFormatter: (params) => new Date(params.value).toLocaleDateString('vi-VN') // Định dạng ngày
    }
  ];

  pagination = true;
  paginationPageSize = 50;
  paginationPageSizeSelector = [50, 500, 1000];
  // Cấu hình chung cho các cột
  public defaultColDef: ColDef = {
    filter: true, // Bật tính năng lọc
    sortable: true, // Bật tính năng sắp xếp
  };
  public gridApi!: GridApi; // Khai báo API của grid
  public gridColumnApi: any;

  // Lấy API của AG Grid sau khi grid được khởi tạo
  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    // this.gridColumnApi = params.columnApi;
  }

  // Thêm một hàng trống mới
  addNewRow() {
    const newRow = { roomCode: '', price: 0, available: true };

    // Sử dụng applyTransaction để thêm hàng mới vào grid
    this.gridApi.applyTransaction({ add: [newRow] });

    // Lấy chỉ số của hàng mới thêm
    const lastRowIndex = this.gridApi.getDisplayedRowCount() - 1;

    // Bắt đầu chỉnh sửa hàng mới thêm
    this.gridApi.startEditingCell({
      rowIndex: lastRowIndex,
      colKey: 'roomCode'
    });
  }
  deleteSelectedRows() {
    const selectedRows = this.gridApi.getSelectedRows();  // Lấy hàng đã chọn
    this.gridApi.applyTransaction({ remove: selectedRows });  // Xóa hàng
  }
  saveChanges(){
    
  }
}
