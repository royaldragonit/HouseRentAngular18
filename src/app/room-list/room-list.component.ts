import { Component } from '@angular/core';
import {
  ColDef,
  RowSelectionOptions,
  GridApi,
  GridReadyEvent
} from "ag-grid-community";

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent {
  hasSelectedRows = false;  // Theo dõi trạng thái có hàng được chọn hay không
  // Dữ liệu phòng trọ: danh sách các phòng, giá thuê, và tình trạng phòng
  rowData = [
    { roomCode: "P101", price: 2000000, available: true, representative: null, phoneNumber: null },
    { roomCode: "P102", price: 2500000, available: false, representative: "Nguyễn Văn A", phoneNumber: "0901234567" },
    { roomCode: "P201", price: 3000000, available: true, representative: null, phoneNumber: null },
  ];
  onSelectionChanged() {
    const selectedRows = this.gridApi.getSelectedRows();
    this.hasSelectedRows = selectedRows.length > 0;
  }

  pagination = true;
  paginationPageSize = 50;
  paginationPageSizeSelector = [50, 500, 1000];

  colDefs: ColDef[] = [
    { field: "roomCode", headerName: "Mã Phòng", editable: true, flex: 1 },
    { 
      field: "price", 
      headerName: "Giá Thuê", 
      editable: true, 
      flex: 1, 
      valueFormatter: (params: any) => `${params.value.toLocaleString('vi-VN')} VND` 
    },
    { 
      headerName: "Người Đại Diện", 
      flex: 1, 
      valueGetter: (params: any) => params.data.available ? '-' : params.data.representative 
    },
    { 
      headerName: "Số Điện Thoại", 
      flex: 1, 
      valueGetter: (params: any) => params.data.available ? '-' : params.data.phoneNumber 
    },
    { field: "available", headerName: "Còn Trống", editable: true, flex: 1, cellRenderer: (params: any) => params.value ? 'Còn' : 'Hết' },
    { 
      headerName: "Chi Tiết", 
      cellRenderer: (params: any) => {
        const button = document.createElement('button');
        button.innerText = 'Chi tiết';
        button.className = 'btn btn-info';
        button.addEventListener('click', () => {
          // Thực hiện hành động khi người dùng nhấn nút "Chi tiết"
          alert(`Chi tiết phòng: ${params.data.roomCode}`);
        });
        return button;
      },
      flex: 1
    }
  ];
  
  

  public defaultColDef: ColDef = {
    filter: "agTextColumnFilter",
    floatingFilter: true,
  };

  public rowSelection: RowSelectionOptions | "single" | "multiple" = {
    mode: "multiRow",
    headerCheckbox: false,
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
    this.hasSelectedRows = false;  // Cập nhật lại trạng thái sau khi xóa
  }
  saveChanges(){
    
  }
}
