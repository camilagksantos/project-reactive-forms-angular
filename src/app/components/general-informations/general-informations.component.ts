import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/i-user';

@Component({
  selector: 'app-general-informations',
  standalone: false,
  templateUrl: './general-informations.component.html',
  styleUrl: './general-informations.component.scss'
})
export class GeneralInformationsComponent {
  @Input({ required: true}) userCGeneral: IUser = {} as IUser;
}
