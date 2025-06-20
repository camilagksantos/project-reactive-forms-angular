import { PhoneType } from "../enums/phone-type.enum";
import { IPhone } from "../interfaces/user/i-phone";
import { PhoneList } from "../types/phone-list";
import { phoneTypeDescriptionMap } from "./phone-type-description-map";

export const preparePhoneList = (originalUserPhoneList: PhoneList,isDisplayPhone: boolean , callback: (phone: { type: number; typeDescription: string; phoneNumber: string; }) => void) => {
    Object.keys(phoneTypeDescriptionMap).map(Number).forEach((phoneType: number) => {
        const phoneFound = originalUserPhoneList.find((userPhone: IPhone) => userPhone.type === phoneType);

        let phoneNumber = '';

        if (isDisplayPhone) {
            phoneNumber = phoneFound ? formatPhoneNumberToDisplay(phoneFound) : '-';
        } else { 
            phoneNumber = phoneFound ? formatPhoneNumberToEdit(phoneFound) : '';
        }
        
        callback({
            type: phoneType,
            typeDescription: phoneTypeDescriptionMap[phoneType as PhoneType],
            phoneNumber: phoneNumber,
        });
    })
}

const formatPhoneNumberToDisplay = (phone: IPhone) => {
    return `${phone.internationalCode} ${phone.areaCode} ${phone.number}`;
}

const formatPhoneNumberToEdit = (phone: IPhone) => {
    return `${phone.internationalCode}${phone.areaCode}${phone.number}`.replace(/[+\-]/g, '');
}