import { Directive, ElementRef, OnInit } from "@angular/core";
import { Renderer2 } from "@angular/core";

@Directive({
   selector: '[setBackground]'
})

export class SetBackground implements OnInit{

     constructor(private element:ElementRef, private randerer:Renderer2){

     }

     ngOnInit(){
        //  this.element.nativeElement.style.backgroundColor = '#36454f'
        //  this.element.nativeElement.style.color = 'white'
        this.randerer.setStyle(this.element.nativeElement, 'backgroundColor', '#36454f')
        this.randerer.setStyle(this.element.nativeElement, 'color', 'white')
        this.randerer.setAttribute(this.element.nativeElement, 'title', 'Best Product')
     }
}

