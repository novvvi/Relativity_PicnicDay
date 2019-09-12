import {Component, OnInit, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { HttpService } from '../http.service';
import { MatAutocomplete } from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  control = new FormControl();
  airports: any;
  filteredAirports: Observable<string[]>;
  searchResult: string;
  airport_id : string;

  
  @ViewChild(MatAutocomplete, {static: true}) matAutocomplete: MatAutocomplete;

  constructor(private _hs: HttpService) {}

  ngOnInit() {
    this._getAirportNames();
    this.filteredAirports = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.searchResult;
  }

  private _filter(value: string): string[] {
    var avoidKeyword = [ "air", "airp", "airpo", "airpor", "airport","hel", "heli", "helip", "helipo", "helipor", "heliport"];
    const filterValue = this._normalizeValue(value);
    if(!this.airports) return [];
    if(this._normalizeValue(value).length < 4 || avoidKeyword.includes(this._normalizeValue(value))){
      return null;
    }
    else{
      return this.airports.filter(airport => this._normalizeValue(airport.name).includes(filterValue));
    }
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  private _getAirportNames(){
    let obs = this._hs.getAll();
    obs.subscribe(data => {
      console.log(typeof data);
      this.airports = data;
    })
  }

  public chooseFirstOption(): void {
    this.matAutocomplete.options.first.select();
  }

  // displayFn(state) {
  //   if (!state) return '';
  //   return state.name;
  // }


  public _postSearch(){
    let id = this.airports.findIndex(a => a.name === this.searchResult);
    if (id == -1)
    {
      return null
    }
    else
    {
      console.log(this.airports[id].airport_id);
      this.airport_id = this.airports[id].airport_id;
    }
  }
}