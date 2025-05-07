import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';
import { StatesService } from './services/states.service';
import { CitiesService } from './services/cities.service';
import { UsersService } from './services/users.service';
import { UsersListResponse } from './types/users-list-response';
import { IUser } from './interfaces/user/i-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  usersListAppC: UsersListResponse = [];
  userSelectedIndex: number | undefined;
  userSelected: IUser = {} as IUser;
  isInEditMode: boolean = false;
  
  constructor(
    private readonly _countriesService: CountriesService,
    private readonly _statesService: StatesService,
    private readonly _citiesService: CitiesService,
    private readonly _usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.getCountries();
    this.getStates();
    this.getCities();
    this.getUsers();
  }

  getCountries() {
    this._countriesService.getCountries().subscribe(
      (countriesResponse) => { }
    );
  }

  getStates() {
    this._statesService.getStates('Brazil').subscribe(
      (statesResponse) => { }
    );
  }

  getCities() {
    this._citiesService.getCities('Brazil', 'São Paulo').subscribe(
      (citiesResponse) => { }
    );
  }

  getUsers() {
    this._usersService.getUsers().pipe().subscribe((usersResponse) => this.usersListAppC = usersResponse);
  }

  onUserSelectedAppC(userIndex: number) {
    const userFound = this.usersListAppC[userIndex];

    if (userFound) {
      this.userSelectedIndex = userIndex;
      this.userSelected = {
        ...structuredClone(userFound),
        dependentsList: userFound.dependentsList || []
      };
    }
  }

  onCancelButton() {
    this.isInEditMode = false;
  }
  onEditButton() {
    this.isInEditMode = true;
  }
}
