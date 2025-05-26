import { Pipe, PipeTransform } from '@angular/core';
import { MaritalStatus } from '../enums/marital-status.enum';
import { maritalStatusDescriptionMap } from '../utils/marital-status-description-map';

@Pipe({
  name: 'maritalStatus',
  standalone: false
})
export class MaritalStatusPipe implements PipeTransform {

  transform(maritalStatus: number): string {
    
    return maritalStatusDescriptionMap[maritalStatus as MaritalStatus] ?? 'Desconhecido';
  }
}
