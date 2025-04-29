import { CountriesList } from "../../types/countries.list";
import { IBaseCountriesResponse } from "../i-base-countries-response";

export interface ICountriesResponse extends IBaseCountriesResponse {
    data: CountriesList;
}
