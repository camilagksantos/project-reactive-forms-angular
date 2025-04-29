import { IStatesResponseData } from "./i-states-response-data";

export interface IStatesResponse extends IStatesResponseData {
    data: IStatesResponseData[];
}