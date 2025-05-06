import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AddressList } from '../../../../types/address-list';
import { IAddress } from '../../../../interfaces/user/i-address';
import { AddressType } from '../../../../enums/address-type.enum';
import { addressTypeDescriptionMap } from '../../../../utils/address-type-description-map';
import { IAddressListToDisplay } from '../../../../interfaces/i-address-list-to-display';

@Component({
  selector: 'app-address-list',
  standalone: false,
  templateUrl: './address-list.component.html',
  styleUrl: './address-list.component.scss'
})
export class AddressListComponent implements OnChanges{
  addressListToDisplay: IAddressListToDisplay[] = [];
  @Input({ required: true }) userAddressList: AddressList = [];

  ngOnChanges(changes: SimpleChanges) {
    const ADDRESS_LIST_LOADED = Array.isArray(changes['userAddressList'].currentValue);

    if (ADDRESS_LIST_LOADED) {
      this.prepareAddressListToDisplay();
    }
  }

  prepareAddressListToDisplay() {
    this.addressListToDisplay = [];

    Object.keys(addressTypeDescriptionMap).map(Number).forEach((addressType: number) => { 
      const addressFound = this.userAddressList.find((userAddress: IAddress) => userAddress.type === addressType);

      this.addressListToDisplay.push( this.returnAddressToDisplay(addressFound, addressType));
    })
  }

  returnAddressToDisplay(address: IAddress | undefined, addressType: number): IAddressListToDisplay { 
    if (!address) {
      return {
        typeDescription: addressTypeDescriptionMap[addressType as AddressType],
        type: addressType,
        street: '-',
        complement: '-',
        country: '-',
        state: '-',
        city: '-'
      };
    }

    return {
      typeDescription: addressTypeDescriptionMap[addressType as AddressType],
      ...address
    }
  }
}
