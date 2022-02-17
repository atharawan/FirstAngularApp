import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: '[mySelector]'
})
export class HightLightDirective
{

  @Input() inputColor:string = '';

  constructor(private el : ElementRef)
  {
  }

  @HostListener('mouseover') OnMouseOver()
  {
    this.hightLightColor('');
    // this.el.nativeElement.style.backgroundColor = 'Red';
  }

  @HostListener('mouseleave') OnMouseLeave()
  {
    this.el.nativeElement.style.backgroundColor = 'Green';
  }

  private hightLightColor(color: string)
  {
    this.el.nativeElement.style.backgroundColor = this.inputColor == '' ? color : this.inputColor;

  }
}
