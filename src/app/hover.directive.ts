import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hoverColor]'
})
export class HoverDirective implements OnInit {

  constructor(
    private element: ElementRef,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) { }


  @Input() hoverColor: string = "white";

  @Input() color: string = "red";
  bgColor: string = "azure";


  ngOnInit(): void {
    // console.log(this.element.nativeElement);
    this.element.nativeElement.style.color = this.color;
    this.renderer.setStyle(this.element.nativeElement, "backgroundColor", this.bgColor);
  }


  @HostListener("mouseenter") onMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, "color", this.hoverColor);
  }

}
