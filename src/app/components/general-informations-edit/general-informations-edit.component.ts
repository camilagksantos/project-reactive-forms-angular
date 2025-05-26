import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { CountriesList } from '../../types/countries.list';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { StatesList } from '../../types/states-list';
import { maritalStatusArray } from '../../utils/marital-status-description-map';

@Component({
  selector: 'app-general-informations-edit',
  standalone: false,
  templateUrl: './general-informations-edit.component.html',
  styleUrl: './general-informations-edit.component.scss'
})
export class GeneralInformationsEditComponent implements OnInit, OnChanges {

  countriesListFiltered: CountriesList = [];
  statesListFiltered: StatesList = [];



  @Input({ required: true }) userFormEdit!: FormGroup;

  @Input({ required: true }) countriesListEdit: CountriesList = [];
  @Input({ required: true }) statesListEdit: StatesList = [];

  @Output() onCountrySelectedEmitt = new EventEmitter<string>();


  
  ngOnInit() {
    this.watchCountryFormChangesAndFilter();
    this.watchStateFormChangesAndFilter();
  }
  
  ngOnChanges(changes: SimpleChanges) {
    this.countriesListFiltered = this.countriesListEdit;
    this.statesListFiltered = this.statesListEdit;
  }

  get maritalStatusArray() {
    return maritalStatusArray;
  }

  get emailControl(): FormControl {
    return this.userFormEdit.get('generalInformations.email') as FormControl;
  }

  get countryControl(): FormControl {
    return this.userFormEdit.get('generalInformations.country') as FormControl;
  }

  get stateControl(): FormControl {
    return this.userFormEdit.get('generalInformations.state') as FormControl;
  }



  onCountrySelected(event: MatAutocompleteSelectedEvent) {
    this.onCountrySelectedEmitt.emit(event.option.value);
  }

  onStateSelected($event: MatAutocompleteSelectedEvent) {

  }


  private watchCountryFormChangesAndFilter() {
    // this.countryControl.valueChanges.subscribe((country: string) => this.filterCountryList(country));
    this.countryControl.valueChanges.subscribe(this.filterCountriesList.bind(this));
  }

  private filterCountriesList(searchTerm: string) {
    this.countriesListFiltered = this.countriesListEdit.filter(
      (country) => country.name.toLowerCase().includes(searchTerm.toLowerCase().trim()));
  }



  private watchStateFormChangesAndFilter() {
    this.stateControl.valueChanges.subscribe(this.filterStatesList.bind(this));
  }

  private filterStatesList(searchTerm: string) {
    this.statesListFiltered = this.statesListEdit.filter(
      (state) => state.name.toLowerCase().includes(searchTerm.toLowerCase().trim()));
  }
}
