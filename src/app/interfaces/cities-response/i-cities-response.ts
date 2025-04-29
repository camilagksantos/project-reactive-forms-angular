import { CitiesList } from "../../types/cities-list";
import { IBaseCountriesResponse } from "../i-base-countries-response";

export interface ICitiesResponse extends IBaseCountriesResponse{
    data: CitiesList;
}
