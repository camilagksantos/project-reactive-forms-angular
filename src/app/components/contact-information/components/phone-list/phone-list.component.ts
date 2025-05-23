import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PhoneList } from '../../../../types/phone-list';
import { PhoneType } from '../../../../enums/phone-type.enum';
import { IPhone } from '../../../../interfaces/user/i-phone';
import { IPhoneToDisplay } from '../../../../interfaces/i-phone-to-display';
import { phoneTypeDescriptionMap } from '../../../../utils/phone-type-description-map';

@Component({
  selector: 'app-phone-list',
  standalone: false,
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.scss'
})
export class PhoneListComponent implements OnChanges{
  phoneListToDisplay: IPhoneToDisplay[] = [];
  @Input({ required: true }) userPhoneList: PhoneList = [];

  ngOnChanges(changes: SimpleChanges) {
    const PHONE_LIST_LOADED = Array.isArray(changes['userPhoneList'].currentValue);

    if (PHONE_LIST_LOADED) {
      this.preparePhoneListToDisplay();
    }
  }

  preparePhoneListToDisplay() {
    this.phoneListToDisplay = [];

    Object.keys(phoneTypeDescriptionMap).map(Number).forEach((phoneType: number) => { 
      const phoneFound = this.userPhoneList.find((userPhone: IPhone) => userPhone.type === phoneType);

      this.phoneListToDisplay.push({
        type: phoneTypeDescriptionMap[phoneType as PhoneType],
        phoneNumber: phoneFound ? this.formatPhoneNumber(phoneFound) : '-',
      });
    })
  }

  formatPhoneNumber(phone: IPhone) {
    return `${phone.internationalCode} ${phone.areaCode} ${phone.number}`;
  }
}
