import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IUser } from '../../interfaces/user/i-user';

@Component({
  selector: 'app-user-informations-container',
  standalone: false,
  templateUrl: './user-informations-container.component.html',
  styleUrl: './user-informations-container.component.scss'
})
export class UserInformationsContainerComponent implements OnChanges{
  currentTabIndex: number = 0;

  @Input({ required: true }) userSelectedInformationContainerC: IUser = {} as IUser;
  @Input({ required: true }) isInEditModeInformationContainerC: boolean = false;

  ngOnChanges(_: SimpleChanges){
    this.currentTabIndex = 0;
  }
}
