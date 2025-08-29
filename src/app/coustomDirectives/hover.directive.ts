import { Directive, ElementRef, Host, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[hover]'
})

export class HoverDirective{
     constructor(private element:ElementRef, private renderer:Renderer2){}

     @HostBinding('style.backgroundColor') backgroundColor:string = '#28282B'
     @HostBinding('style.border') border:string = 'none'
     @HostBinding('style.color') textColor:string = 'white'

     @HostListener('mouseenter') mouseEnter(){
        this.backgroundColor = 'white'
        this.border = '3px solid #28282B'
        this.textColor = '#28282B'
     }

     @HostListener('mouseout') mouseOut(){
        this.backgroundColor = '#28282B'
        this.border = 'none'
        this.textColor = 'white'
     }
}
