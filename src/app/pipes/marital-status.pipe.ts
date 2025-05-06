import { Pipe, PipeTransform } from '@angular/core';
import { MaritalStatus } from '../enums/marital-status.enum';

@Pipe({
  name: 'maritalStatus',
  standalone: false
})
export class MaritalStatusPipe implements PipeTransform {

  transform(maritalStatus: number): string {
    const maritalStatusMap: { [key in MaritalStatus]: string } = {
      [MaritalStatus.SINGLES]: 'Solteiro',
      [MaritalStatus.MARRIED]: 'Casado',
      [MaritalStatus.DIVORCED]: 'Divorciado',
    }
    return maritalStatusMap[maritalStatus as MaritalStatus] ?? 'Desconhecido';
  }
}
