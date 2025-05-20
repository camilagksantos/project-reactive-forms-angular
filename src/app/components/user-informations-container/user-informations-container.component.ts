import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IUser } from '../../interfaces/user/i-user';
import { UserFormController } from './user-form-controller';

@Component({
  selector: 'app-user-informations-container',
  standalone: false,
  templateUrl: './user-informations-container.component.html',
  styleUrl: './user-informations-container.component.scss'
})
export class UserInformationsContainerComponent extends UserFormController implements OnChanges{
  currentTabIndex: number = 0;

  @Input({ required: true }) isInEditModeInformationContainerC: boolean = false;
  @Input({ required: true }) userSelectedInformationContainerC: IUser = {} as IUser;

  ngOnChanges(changes: SimpleChanges){
    this.currentTabIndex = 0;

    const HAS_USER_SELECTED = changes['userSelectedInformationContainerC'] && Object.keys(changes['userSelectedInformationContainerC'].currentValue).length > 0;

    if (HAS_USER_SELECTED) {
      this.fulfillForm(this.userSelectedInformationContainerC);
    }
  }
}
