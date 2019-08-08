import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) {

  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.setColor("darkgrey");
  }

  @HostListener("mouseleave")
  onMouseLeave(): void{
    this.setColor(null);
  }
  
  setColor(color: string): void {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
