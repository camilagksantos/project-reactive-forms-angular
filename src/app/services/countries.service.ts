import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICountriesResponse } from '../interfaces/coutnries-response/i-countries-response';
import { CountriesList } from '../types/countries.list';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
    private readonly _httpClient: HttpClient,
  ) { }

  //refazer esse metodo consierando que a url é countiesnow.space/api/v0.1/countries/positions
  getCountries(): Observable<CountriesList> {
    return this._httpClient.get<ICountriesResponse>('https://countriesnow.space/api/v0.1/countries/positions').pipe(
      map((response) => {
        return response.data;
      })
    );
  }
}
