import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
    private readonly _httpClient: HttpClient,
  ) { }

  //refazer esse metodo consierando que a url é countiesnow.space/api/v0.1/countries/positions
  getCountries(): Observable<any> {
    return this._httpClient.get<any>('https://countriesnow.space/api/v0.1/countries/positions').pipe(
      map((response) => {
        return response.data;
      })
    );
  }
}
