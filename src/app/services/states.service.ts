import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IStatesResponse } from '../interfaces/states-response/i-states-response';
import { StatesList } from '../types/states-list';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  getStates(country: string): Observable<StatesList>{
    return this._httpClient.post<IStatesResponse>(
      'https://countriesnow.space/api/v0.1/countries/states',
      { country }
    ).pipe(
      map((response: any) => {
        return response.data.states;
      })
    );
  }
}
