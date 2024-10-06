import { Component } from '@angular/core';
import {
  ColDef,
  RowSelectionOptions,
  GridApi,
  GridReadyEvent
} from "ag-grid-community";

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrl: './tenant-list.component.css'
})
export class TenantListComponent {
    hasSelectedRows = false;  // Theo dõi trạng thái có hàng được chọn hay không

    // Dữ liệu tenant: danh sách các tenant
    rowData = [
      { tenantID: 1, fullName: "Nguyễn Văn A", idCard: "012345678", phoneNumber: "0901234567", occupation: "Nhân viên văn phòng", relativeName: "Nguyễn Văn B", relativePhone: "0987654321", roomID: "P101" },
      { tenantID: 2, fullName: "Trần Thị B", idCard: "876543210", phoneNumber: "0902345678", occupation: "Sinh viên", relativeName: "Trần Văn C", relativePhone: "0908765432", roomID: "P102" },
      { tenantID: 3, fullName: "Lê Văn C", idCard: "123456789", phoneNumber: "0903456789", occupation: "Kỹ sư", relativeName: "Lê Thị D", relativePhone: "0909876543", roomID: "P201" }
    ];

    onSelectionChanged() {
      const selectedRows = this.gridApi.getSelectedRows();
      this.hasSelectedRows = selectedRows.length > 0;
    }

    pagination = true;
    paginationPageSize = 50;
    paginationPageSizeSelector = [50, 500, 1000];

    colDefs: ColDef[] = [
      { field: "fullName", headerName: "Họ Tên", editable: true, flex: 1 },
      { field: "idCard", headerName: "Căn Cước", editable: true, flex: 1 },
      { field: "phoneNumber", headerName: "Số Điện Thoại", editable: true, flex: 1 },
      { field: "occupation", headerName: "Nghề Nghiệp", editable: true, flex: 1 },
      { field: "relativeName", headerName: "Người Thân", editable: true, flex: 1 },
      { field: "relativePhone", headerName: "Số ĐT Người Thân", editable: true, flex: 1 },
      { field: "roomID", headerName: "Mã Phòng", editable: true, flex: 1 },
      { 
        headerName: "Chi Tiết", 
        cellRenderer: (params: any) => {
          const button = document.createElement('button');
          button.innerText = 'Chi tiết';
          button.className = 'btn btn-info';
          button.addEventListener('click', () => {
            // Thực hiện hành động khi người dùng nhấn nút "Chi tiết"
            alert(`Chi tiết tenant: ${params.data.fullName}`);
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
    }

    // Thêm một tenant mới
    addNewRow() {
      const newRow = { tenantID: null, fullName: '', idCard: '', phoneNumber: '', occupation: '', relativeName: '', relativePhone: '', roomID: '' };

      // Sử dụng applyTransaction để thêm hàng mới vào grid
      this.gridApi.applyTransaction({ add: [newRow] });

      // Lấy chỉ số của hàng mới thêm
      const lastRowIndex = this.gridApi.getDisplayedRowCount() - 1;

      // Bắt đầu chỉnh sửa hàng mới thêm
      this.gridApi.startEditingCell({
        rowIndex: lastRowIndex,
        colKey: 'fullName'
      });
    }

    // Xóa các tenant đã chọn
    deleteSelectedRows() {
      const selectedRows = this.gridApi.getSelectedRows();  // Lấy hàng đã chọn
      this.gridApi.applyTransaction({ remove: selectedRows });  // Xóa hàng
      this.hasSelectedRows = false;  // Cập nhật lại trạng thái sau khi xóa
    }

    // Lưu thay đổi dữ liệu
    saveChanges() {
      const updatedRows: any[] = [];
      this.gridApi.forEachNode((node) => {
        updatedRows.push(node.data);  // Lưu lại tất cả các hàng đã chỉnh sửa
      });

      console.log(updatedRows);  // Hiển thị dữ liệu đã chỉnh sửa
      // Gửi dữ liệu này tới API để lưu lại trên server nếu cần
    }
}
