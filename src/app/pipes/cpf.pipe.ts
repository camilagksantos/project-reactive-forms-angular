import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf',
  standalone: false
})
export class CpfPipe implements PipeTransform {

  transform(value: unknown, hideNumbers = true): string | null {
    if (typeof value !== 'number' && typeof value !== 'string') {
      return null;
    }

    const rawCpf = value.toString().replace(/\D/g, '').padStart(11, '0');

    if (rawCpf.length !== 11) {
      return null;
    }

    const formatted = rawCpf.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      '$1.$2.$3-$4'
    );

    if (hideNumbers) {
      // Exemplo: XXX.456.789-XX
      return 'XXX.' + formatted.substring(4, 11) + '-XX';
    }

    return formatted;
  }

}
