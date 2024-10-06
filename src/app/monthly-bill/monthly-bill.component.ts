import { Component } from '@angular/core';

@Component({
  selector: 'app-monthly-bill',
  templateUrl: './monthly-bill.component.html',
  styleUrl: './monthly-bill.component.css'
})
export class MonthlyBillComponent {
  rooms = [
    { roomCode: 'A101' },
    { roomCode: 'A102' }
  ];
  
  selectedRoom: string = "";
  electricityOld: number = 0;
  electricityNew: number = 0;
  waterUsage: number = 1;
  additionalCosts: number = 0;
  totalAmount: number = 0;
  
  electricityPrice: number = 4000; // Giá điện
  waterPrice: number = 100000; // Giá nước mỗi người

  calculateBill() {
    const electricityCost = (this.electricityNew - this.electricityOld) * this.electricityPrice;
    const waterCost = this.waterUsage * this.waterPrice;
    this.totalAmount = electricityCost + waterCost + this.additionalCosts;
  }
}
