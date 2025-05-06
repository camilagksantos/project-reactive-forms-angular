import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/i-user';

@Component({
  selector: 'app-contact-information',
  standalone: false,
  templateUrl: './contact-information.component.html',
  styleUrl: './contact-information.component.scss'
})
export class ContactInformationComponent {
  @Input({ required: true }) userContactInformationC: IUser = {} as IUser;
}
