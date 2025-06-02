import { Pipe, PipeTransform } from '@angular/core';
import { PhoneType } from '../enums/phone-type.enum';

@Pipe({
  name: 'phoneMask',
  standalone: false
})
export class PhoneMaskPipe implements PipeTransform {

  transform(value: string | null | undefined, phoneType: PhoneType): string {
    if (!value) return '';

    const digits = value.replace(/\D/g, '');

    switch (phoneType) {
      case PhoneType.RESIDENTIAL:
        // +00 00 0000-0000
        return this.formatResidential(digits);

      case PhoneType.MOBILE:
        // +00 00 00000-0000
        return this.formatMobile(digits);

      case PhoneType.EMERGENCY:
        // aceita tanto o formato fixo quanto o móvel
        return digits.length === 13
          ? this.formatMobile(digits)
          : this.formatResidential(digits);

      default:
        return value;
    }
  }

  private formatResidential(d: string): string {
    return d.replace(/^(\d{2})(\d{2})(\d{4})(\d{4})$/, '+$1 $2 $3-$4');
  }

  private formatMobile(d: string): string {
    return d.replace(/^(\d{2})(\d{2})(\d{5})(\d{4})$/, '+$1 $2 $3-$4');
  }
}


