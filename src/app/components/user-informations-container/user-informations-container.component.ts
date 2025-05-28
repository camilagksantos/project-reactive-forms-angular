import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IUser } from '../../interfaces/user/i-user';
import { UserFormController } from './user-form-controller';
import { CountriesService } from '../../services/countries.service';
import { CountriesList } from '../../types/countries.list';
import { take } from 'rxjs';
import { StatesService } from '../../services/states.service';
import { StatesList } from '../../types/states-list';

@Component({
  selector: 'app-user-informations-container',
  standalone: false,
  templateUrl: './user-informations-container.component.html',
  styleUrl: './user-informations-container.component.scss'
})
export class UserInformationsContainerComponent extends UserFormController implements OnInit, OnChanges{

  currentTabIndex: number = 0;
  countriesList: CountriesList = [];
  StatesListContainerC: StatesList = [];

  private readonly _countriesService = inject(CountriesService);
  private readonly _statesService = inject(StatesService);

  @Input({ required: true }) isInEditModeInformationContainerC: boolean = false;
  @Input({ required: true }) userSelectedInformationContainerC: IUser = {} as IUser;

  ngOnInit(){
    this.getCountriesList();
  }

  ngOnChanges(changes: SimpleChanges){
    this.currentTabIndex = 0;

    const HAS_USER_SELECTED = changes['userSelectedInformationContainerC'] && Object.keys(changes['userSelectedInformationContainerC'].currentValue).length > 0;

    if (HAS_USER_SELECTED) {
      this.fulfillForm(this.userSelectedInformationContainerC);
      this.getSatesList(this.userSelectedInformationContainerC.country);
    }
  }
  
  getCountriesList() {
    this._countriesService.getCountries().pipe(take(1)).subscribe((countriesList: CountriesList) => {
      this.countriesList = countriesList;
    });
  }

  onCountrySelected(countryName: string) {
    this.getSatesList(countryName);
  }

  private getSatesList(country: string) {
    this._statesService.getStates(country).pipe(take(1)).subscribe((statesList: StatesList) => {
      this.StatesListContainerC = statesList;
    });
  }

  mostrarUserForm() {
    console.log('mostrarUserForm', this.userFormController);
  }
}
