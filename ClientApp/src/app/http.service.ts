import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResultInfo, IAirportInfo } from "./iresult";


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly baseUrl = "https://wjpicnicday.azurewebsites.net";

  constructor(private _h: HttpClient) { }
  

  getAll() {
    return this._h.get(this.baseUrl +"/api/airports")
  }
  

  getAirport(id) {
    return this._h.get<IAirportInfo>(this.baseUrl +"/api/airports/info/" + id)
  }


  getResult(id) {
    return this._h.get<IResultInfo>(this.baseUrl +"/api/airports/result/" + id)
  }
}
