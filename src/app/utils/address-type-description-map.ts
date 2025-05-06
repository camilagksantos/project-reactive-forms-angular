import { AddressType } from "../enums/address-type.enum";

export const addressTypeDescriptionMap: { [key in AddressType]: string } = {
  [AddressType.RESIDENTIAL]: 'Residencial',
  [AddressType.WORK]: 'Trabalho',
  [AddressType.ALTERNATIVE]: 'Alternativo'
};