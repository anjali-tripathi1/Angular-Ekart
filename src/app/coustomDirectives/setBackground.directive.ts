import { Directive, ElementRef, Input, OnInit } from "@angular/core";
import { Renderer2 } from "@angular/core";

@Directive({
   selector: '[setBackground]'
})

export class SetBackground implements OnInit{

     constructor(private element:ElementRef, private randerer:Renderer2){

     }

    // @Input('setBackground') backColor:string = '#36454f'
    // @Input() textColor:string = 'white'

    @Input('setBackground') changeBackAndText:{backColor:string, textColor:string}

     ngOnInit(){
        //  this.element.nativeElement.style.backgroundColor = '#36454f'
        //  this.element.nativeElement.style.color = 'white'
        this.randerer.setStyle(this.element.nativeElement, 'backgroundColor', this.changeBackAndText.backColor)
        this.randerer.setStyle(this.element.nativeElement, 'color',this.changeBackAndText.textColor)
        this.randerer.setAttribute(this.element.nativeElement, 'title', 'Best Product')
     }
}

