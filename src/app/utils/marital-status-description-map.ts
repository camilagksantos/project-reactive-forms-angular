import { MaritalStatus } from "../enums/marital-status.enum";

export const maritalStatusDescriptionMap: { [key in MaritalStatus]: string } = {
    [MaritalStatus.SINGLES]: 'Solteiro',
    [MaritalStatus.MARRIED]: 'Casado',
    [MaritalStatus.DIVORCED]: 'Divorciado',
}

export const maritalStatusArray = Object.keys(maritalStatusDescriptionMap).map(Number).map((key) => {
    return {
        code: key,
        description: maritalStatusDescriptionMap[key as MaritalStatus]
    };
});