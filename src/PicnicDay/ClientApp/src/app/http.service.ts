import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly baseUrl = "http://localhost:5000";

  constructor(private _h: HttpClient) { }
  

  getAll() {
    return this._h.get(this.baseUrl +"/api/airports")
  }
  

  getAirport(id) {
    return this._h.get(this.baseUrl +"/api/airports/info/" + id)
  }


  getResult(id) {
    return this._h.get(this.baseUrl +"/api/airports/result/" + id)
  }
}
