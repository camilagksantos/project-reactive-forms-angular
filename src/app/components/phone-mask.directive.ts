import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit } from '@angular/core';
import { PhoneType } from '../enums/phone-type.enum';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appPhoneMask]',
  standalone: false
})
export class PhoneMaskDirective implements OnInit, OnChanges {

  @Input('appPhoneMask') phoneType: PhoneType = PhoneType.RESIDENTIAL;

  private input!: HTMLInputElement;

  constructor(private el: ElementRef, private control: NgControl) { }

  ngOnInit(): void {
    this.input = this.el.nativeElement;

    // Aguarda o Angular inicializar os valores antes de formatar
    setTimeout(() => {
      const initialValue = this.control?.value;
      if (initialValue) {
        const formatted = this.format(initialValue);
        this.input.value = formatted;
      }
    });
  }

  ngOnChanges(): void {
    const value = this.control?.value;
    if (this.input && value) {
      const formatted = this.format(value);
      this.input.value = formatted;
    }
  }

  @HostListener('input', ['$event.target.value'])
  onInput(rawValue: string): void {
    const formatted = this.format(rawValue);
    this.input.value = formatted;
    this.control.control?.setValue(formatted, { emitEvent: false });
  }

  private format(value: string): string {
    const digits = value.replace(/\D/g, '');

    switch (this.phoneType) {
      case PhoneType.MOBILE:
        return digits.replace(/^(\d{2})(\d{2})(\d{5})(\d{4})$/, '+$1 $2 $3-$4');
      case PhoneType.RESIDENTIAL:
        return digits.replace(/^(\d{2})(\d{2})(\d{4})(\d{4})$/, '+$1 $2 $3-$4');
      case PhoneType.EMERGENCY:
        return digits.length === 13
          ? digits.replace(/^(\d{2})(\d{2})(\d{5})(\d{4})$/, '+$1 $2 $3-$4')
          : digits.replace(/^(\d{2})(\d{2})(\d{4})(\d{4})$/, '+$1 $2 $3-$4');
      default:
        return value;
    }
  }
}
