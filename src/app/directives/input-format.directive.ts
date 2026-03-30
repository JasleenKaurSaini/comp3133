import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) {}

  @HostListener('blur') onBlur(): void {
    const inputElement: HTMLInputElement = this.el.nativeElement;
    inputElement.value = inputElement.value.toUpperCase();
  }

}
