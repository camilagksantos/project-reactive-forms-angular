import { inject } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IUser } from "../../interfaces/user/i-user";
import { PhoneList } from "../../types/phone-list";
import { AddressList } from "../../types/address-list";
import { DependentsList } from "../../types/dependents-list";
import { convertPtBrDateToDateObj } from "../../utils/convert-pt-br-date-to-date-obj";

export class UserFormController {
    userFormController!: FormGroup;

    private emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    private _formBuilder = inject(FormBuilder);

    constructor() {
        this.createUserForm();
    }

    get generalInformations(): FormGroup {
        return this.userFormController.get('generalInformations') as FormGroup;
    }

    get phoneList(): FormArray {
        return this.userFormController.get('contactInformations.phoneList') as FormArray;
    }

    get addressList(): FormArray {
        return this.userFormController.get('contactInformations.addressList') as FormArray;
    }

    get dependentsList(): FormArray {
        return this.userFormController.get('dependentsList') as FormArray;
    }

    fulfillForm(user: IUser) {
        this.resetForm();

        this.fulfillGeneralInformations(user);
        this.fulfillPhoneList(user.phoneList);
        this.fulfillAddressList(user.addressList);
        this.fulfillDependentsList(user.dependentsList);
    }
    
    private fulfillGeneralInformations(user: IUser) {
        const newUser = {
            ...user,
            birthdate: convertPtBrDateToDateObj(user.birthDate)
        };

        this.generalInformations.patchValue(user);
    }
    
    fulfillPhoneList(phoneList: PhoneList) {
        const phoneFormArray = this.phoneList;
        phoneFormArray.clear();
        phoneList.forEach(phone => {
            phoneFormArray.push(this._formBuilder.group({
                type: [phone.type, Validators.required],
                areaCode: [phone.areaCode, Validators.required],
                number: [phone.number, Validators.required],
                internationalCode: [phone.internationalCode, Validators.required],
            }));
        });
    }
    
    fulfillAddressList(addressList: AddressList) {
        const addressFormArray = this.addressList;
        addressFormArray.clear();
        addressList.forEach(address => {
            addressFormArray.push(this._formBuilder.group({
                type: [address.type, Validators.required],
                street: [address.street, Validators.required],
                complement: [address.complement, Validators.required],
                country: [address.country, Validators.required],
                state: [address.state, Validators.required],
                city: [address.city, Validators.required],
            }));
        });
    }

    fulfillDependentsList(dependentsList: DependentsList) {
        const dependentsFormArray = this.dependentsList;
        dependentsFormArray.clear();
        dependentsList.forEach(dependent => {
            dependentsFormArray.push(this._formBuilder.group({
                name: [dependent.name, Validators.required],
                age: [dependent.age, Validators.required],
                document: [dependent.document, Validators.required],
            }));
        });
    }
    
    private createUserForm() {
        this.userFormController = this._formBuilder.group({
            generalInformations: this._formBuilder.group({
                name: ['', Validators.required],
                email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
                country: ['', Validators.required],
                state: ['', Validators.required],
                maritalStatus: [null, Validators.required],
                monthlyIncome: [null, Validators.required],
                birthDate: [null, Validators.required],
            }),
            contactInformations: this._formBuilder.group({
                phoneList: this._formBuilder.array([]),
                addressList: this._formBuilder.array([])
            }),
            dependentsList: this._formBuilder.array([])
        });
    }

    private resetForm() {
        this.createUserForm();
    }
}