import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(
    private readonly _countriesService: CountriesService
  ) { }
  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this._countriesService.getCountries().subscribe(
      (countriesResponse) => {
        console.log('Countries Response: ', countriesResponse);
      }
    );
  }
}
