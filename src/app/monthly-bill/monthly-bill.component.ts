import { Component } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from "ag-grid-community";

@Component({
  selector: 'app-monthly-bill',
  templateUrl: './monthly-bill.component.html',
  styleUrl: './monthly-bill.component.css'
})
export class MonthlyBillComponent {
    hasSelectedRows = false;  // Theo dõi trạng thái có hàng được chọn hay không

    // Dữ liệu phòng trọ: danh sách các phòng và thông tin liên quan đến hóa đơn
    rowData = [
      { roomCode: 'P101', occupants: 2, electricityOld: 300, electricityNew: 450, representative: 'Nguyễn Văn A', phoneNumber: '0901234567', paid: true, price: 4500000 },
      { roomCode: 'P102', occupants: 3, electricityOld: 350, electricityNew: 520, representative: 'Trần Thị B', phoneNumber: '0909876543', paid: true, price: 4000000 },
      { roomCode: 'P103', occupants: 1, electricityOld: 100, electricityNew: 150, representative: 'Nguyễn Văn C', phoneNumber: '0904567891', paid: true, price: 4500000 },
      { roomCode: 'P104', occupants: 4, electricityOld: 200, electricityNew: 340, representative: 'Phạm Văn D', phoneNumber: '0906547892', paid: true, price: 4500000 },
      { roomCode: 'P105', occupants: 2, electricityOld: 150, electricityNew: 220, representative: 'Lê Thị E', phoneNumber: '0909876544', paid: false, price: 4000000 },
      { roomCode: 'P106', occupants: 3, electricityOld: 270, electricityNew: 410, representative: 'Nguyễn Văn F', phoneNumber: '0901234568', paid: true, price: 4500000 },
      { roomCode: 'P107', occupants: 2, electricityOld: 320, electricityNew: 460, representative: 'Trần Văn G', phoneNumber: '0904567892', paid: true, price: 4500000 },
      { roomCode: 'P201', occupants: 2, electricityOld: 240, electricityNew: 400, representative: 'Nguyễn Văn H', phoneNumber: '0907894563', paid: true, price: 4500000 },
      { roomCode: 'P202', occupants: 1, electricityOld: 220, electricityNew: 300, representative: 'Lê Văn I', phoneNumber: '0903216547', paid: false, price: 4000000 },
      { roomCode: 'P203', occupants: 2, electricityOld: 180, electricityNew: 290, representative: 'Trần Thị K', phoneNumber: '0904567890', paid: false, price: 4500000 },
      { roomCode: 'P204', occupants: 3, electricityOld: 340, electricityNew: 500, representative: 'Phạm Văn L', phoneNumber: '0909876545', paid: false, price: 4500000 },
      { roomCode: 'P205', occupants: 1, electricityOld: 150, electricityNew: 220, representative: 'Nguyễn Thị M', phoneNumber: '0901234569', paid: false, price: 4500000 },
      { roomCode: 'P206', occupants: 2, electricityOld: 120, electricityNew: 180, representative: 'Phạm Thị N', phoneNumber: '0903216548', paid: false, price: 4500000 },
      { roomCode: 'P207', occupants: 4, electricityOld: 360, electricityNew: 600, representative: 'Nguyễn Văn O', phoneNumber: '0906547893', paid: true, price: 4500000 },
      { roomCode: 'P301', occupants: 2, electricityOld: 200, electricityNew: 350, representative: 'Trần Thị P', phoneNumber: '0907894564', paid: true, price: 4000000 },
      { roomCode: 'P302', occupants: 3, electricityOld: 250, electricityNew: 420, representative: 'Phạm Văn Q', phoneNumber: '0904567893', paid: true, price: 4500000 },
      { roomCode: 'P303', occupants: 1, electricityOld: 300, electricityNew: 490, representative: 'Nguyễn Thị R', phoneNumber: '0909876546', paid: true, price: 4500000 },
      { roomCode: 'P304', occupants: 4, electricityOld: 200, electricityNew: 320, representative: 'Trần Văn S', phoneNumber: '0901234560', paid: true, price: 4500000 },
      { roomCode: 'P305', occupants: 2, electricityOld: 170, electricityNew: 270, representative: 'Phạm Thị T', phoneNumber: '0903216549', paid: false, price: 4500000 },
      { roomCode: 'P306', occupants: 3, electricityOld: 320, electricityNew: 510, representative: 'Nguyễn Văn U', phoneNumber: '0906547894', paid: false, price: 4500000 },
      { roomCode: 'P307', occupants: 2, electricityOld: 400, electricityNew: 550, representative: 'Trần Thị V', phoneNumber: '0907894565', paid: true, price: 4500000 },
      { roomCode: 'P401', occupants: 2, electricityOld: 240, electricityNew: 380, representative: 'Nguyễn Văn W', phoneNumber: '0901234561', paid: true, price: 4500000 },
      { roomCode: 'P402', occupants: 1, electricityOld: 220, electricityNew: 320, representative: 'Lê Văn X', phoneNumber: '0909876547', paid: false, price: 4000000 },
      { roomCode: 'P403', occupants: 2, electricityOld: 190, electricityNew: 290, representative: 'Trần Thị Y', phoneNumber: '0904567894', paid: true, price: 4500000 },
      { roomCode: 'P404', occupants: 3, electricityOld: 340, electricityNew: 500, representative: 'Phạm Văn Z', phoneNumber: '0906547895', paid: true, price: 4500000 },
      { roomCode: 'P405', occupants: 1, electricityOld: 150, electricityNew: 220, representative: 'Nguyễn Thị AA', phoneNumber: '0901234562', paid: false, price: 4500000 },
      { roomCode: 'P406', occupants: 2, electricityOld: 120, electricityNew: 180, representative: 'Phạm Thị AB', phoneNumber: '0903216550', paid: false, price: 4500000 },
      { roomCode: 'P407', occupants: 4, electricityOld: 360, electricityNew: 600, representative: 'Nguyễn Văn AC', phoneNumber: '0907894566', paid: true, price: 4500000 }
    ];
    

    pagination = true;
    paginationPageSize = 50;
    paginationPageSizeSelector = [50, 500, 1000];

    // Định nghĩa các cột
    colDefs: ColDef[] = [
      { field: "roomCode", headerName: "Mã Phòng", flex: 1 },
      { field: "occupants", headerName: "Số Người Ở", flex: 1,filter: false },
      { field: "electricityOld", headerName: "Số KW Điện Cũ", flex: 1 ,filter: false},
      { field: "electricityNew", headerName: "Số KW Điện Mới", flex: 1 ,filter: false},
      {
        headerName: "Tiền phòng", 
        valueGetter: (params: any) => `${(params.data.price).toLocaleString('vi-VN')} VND`, 
        flex: 1,
        filter: false
      },
      {
        headerName: "Tổng Tiền",
        valueGetter: (params: any) => `${((params.data.electricityNew - params.data.electricityOld) * 4000 + params.data.price + params.data.occupants*100000).toLocaleString('vi-VN')} VND`, 
        flex: 1,
        filter: false
      },
      { field: "representative", headerName: "Người Đại Diện", flex: 1 },
      { field: "phoneNumber", headerName: "Số Điện Thoại", flex: 1 },
      {
        headerName: "Trạng Thái",
        field: "paid",
        flex: 1,
        filter: false,
        cellRenderer: (params: any) => params.value ? 'Đã Thanh Toán' : 'Chưa Thanh Toán'
      },
      { 
        headerName: "Hành động", 
        cellRenderer: (params: any) => {
          const button = document.createElement('button');
          button.innerText = 'In Bill';
          button.className = 'btn btn-info';
          button.addEventListener('click', () => {
            // Thực hiện hành động khi người dùng nhấn nút "Chi tiết"
            this.printBill(params.data);
          });
          return button;
        },
        flex: 1
      }
    ];

    public defaultColDef: ColDef = {
      filter: true, // Bật bộ lọc
      sortable: true, // Cho phép sắp xếp
      floatingFilter: true // Hiển thị bộ lọc nhỏ bên dưới tiêu đề cột
    };

    public gridApi!: GridApi; // Khai báo API của grid
    public gridColumnApi: any;

    // Lấy API của AG Grid sau khi grid được khởi tạo
    onGridReady(params: GridReadyEvent) {
      this.gridApi = params.api;
    }

    // Cập nhật màu nền toàn dòng dựa trên trạng thái thanh toán
    getRowStyle(params: any) {
      return {
        backgroundColor: params.data.paid ? '#d4edda' : '#f8d7da' // Xanh lá nhạt cho đã thanh toán, đỏ nhạt cho chưa thanh toán
      };
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
   // Tạo nội dung cho hóa đơn và in
   printBill(data: any) {
    const popupWindow = window.open('', '_blank', 'width=600,height=800');
    popupWindow?.document.write(`
      <html>
      <head>
        <title>Hóa đơn</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
          }
          th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
          }
          .header {
            font-size: 18px;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <h1>Minhouse Huỳnh Lộc</h1>
        <p>Tiền nhà tháng 9.2024</p>
        <p><strong>Số phòng:</strong> ${data.roomCode}</p>
        <p><strong>Đại diện:</strong> ${data.representative}</p>
        <p><strong>SĐT:</strong> ${data.phoneNumber}</p>

        <table>
          <thead>
            <tr>
              <th>Loại dịch vụ</th>
              <th>SL</th>
              <th>T.Tiền</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tiền nhà</td>
              <td>1</td>
              <td>${(data.price / 1000000).toFixed(1)}tr</td>
            </tr>
            <tr>
              <td>Tiền nước</td>
              <td>${data.occupants}</td>
              <td>${(data.occupants * 100000 / 1000).toFixed(0)}k</td>
            </tr>
            <tr>
              <td>Tiền điện</td>
              <td>${data.electricityNew - data.electricityOld}</td>
              <td>${((data.electricityNew - data.electricityOld) * 4000 / 1000).toFixed(0)}k</td>
            </tr>
            <tr>
              <td>Nước 21L</td>
              <td>2</td>
              <td>40k</td>
            </tr>
            <tr>
              <th colspan="2">Tổng tiền</th>
              <th>${((data.electricityNew - data.electricityOld) * 4000 + data.price + data.occupants * 100000 + 40000) / 1000}k</th>
            </tr>
          </tbody>
        </table>
        <p><strong>Thông tin chuyển khoản:</strong></p>
        <p>Nguyen Van A</p>
        <p><strong>123456789</strong></p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png" alt="QR Code" width="100">
      </body>
      </html>
    `);
    popupWindow?.document.close();
    popupWindow?.print();
  }
}
