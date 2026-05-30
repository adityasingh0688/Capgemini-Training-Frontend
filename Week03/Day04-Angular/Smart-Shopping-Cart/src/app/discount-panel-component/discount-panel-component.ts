import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-discount-panel-component',
  imports: [FormsModule],
  templateUrl: './discount-panel-component.html',
  styleUrl: './discount-panel-component.css',
})
export class DiscountPanelComponent {
  @Input() cartTotal: number = 0;
  @Output() discountApplied = new EventEmitter<number>();

  code: string = '';
  firstTimeUser: boolean = true;
  
  applyDiscount(){

    if(this.code === 'SAVE10'){
      this.discountApplied.emit(10);
    }

    else if(
      this.code === 'SAVE20'
      && this.cartTotal > 100
    ){
      this.discountApplied.emit(20);
    }

    else if(
      this.code === 'FIRST25'
      && this.firstTimeUser
    ){
      this.discountApplied.emit(25);
    }

    else{
      alert("Invalid Discount Code");
    }
  }

}
