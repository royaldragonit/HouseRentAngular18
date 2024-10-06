import { Component } from '@angular/core';
import {
  ColDef,
  RowSelectionOptions,
  GridApi,
  GridReadyEvent
} from "ag-grid-community";

@Component({
  selector: 'app-fixed-cost',
  templateUrl: './fixed-cost.component.html',
  styleUrl: './fixed-cost.component.css'
})
export class FixedCostComponent {

  hasSelectedRows = false;  // Theo dõi trạng thái có hàng được chọn hay không
  // Dữ liệu phòng trọ: danh sách các phòng, giá thuê, và tình trạng phòng
  rowData = [
    { name: "Electricity", value: 4000, note: "4000d/KW" },
    { name: "Water", value: 100000, note: "100k/người" },
  ];
  onSelectionChanged() {
    const selectedRows = this.gridApi.getSelectedRows();
    this.hasSelectedRows = selectedRows.length > 0;
  }

  pagination = true;
  paginationPageSize = 50;
  paginationPageSizeSelector = [50, 500, 1000];

  colDefs: ColDef[] = [
    { field: "name", headerName: "Loại", editable: true, flex: 1 },
    { 
      field: "value", 
      headerName: "Giá trị", 
      editable: true, 
      flex: 1, 
      valueFormatter: (params: any) => `${params.value.toLocaleString('vi-VN')} VND` 
    },
    { 
      field: "note", 
      headerName: "Ghi chú", 
      flex: 1, 
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
