import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  @Input() highlightColor: string = '#f0f8ff'; // light blue default
  @Input() defaultColor: string = 'transparent';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackgroundColor(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackgroundColor(this.defaultColor);
  }

  private setBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'background-color 0.3s ease');
  }
}
