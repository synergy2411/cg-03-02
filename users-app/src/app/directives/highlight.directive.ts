import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector : '[appHighlight]'
})
export class HighlightDirective{

    @HostBinding('style.backgroundColor') bgColor : any;

    @HostListener('mouseenter') onmouseenter(){
        this.bgColor = "lightgrey";
    }

    @HostListener("mouseleave") onmouseleave(){
        this.bgColor = "transparent";
    }

    // constructor(private eleRef : ElementRef){
    //     this.eleRef.nativeElement.style.backgroundColor = "orange";
    // }
}