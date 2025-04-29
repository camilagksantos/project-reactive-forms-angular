import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ICitiesResponse } from '../interfaces/cities-response/i-cities-response';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  getCities(country: string, state: string){
    return this._httpClient.post<ICitiesResponse>(
        'https://countriesnow.space/api/v0.1/countries/state/cities',
        { country, state }
      ).pipe(
        map((response: any) => {
          return response.data;
        })
      );
    }
}
