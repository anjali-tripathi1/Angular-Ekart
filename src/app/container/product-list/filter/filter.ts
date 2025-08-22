import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.html',
  styleUrl: './filter.css'
})
export class Filter {
  @Input()
   all:number = 0

   @Input()
   inStock:number = 0

   @Input()
   outOfStock:number = 0

   @Output()
   selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>()

   selectedFilterRadioButton:string = 'all'


   onSelectedRadioButtonChanged(){
       this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton)
   }
}
