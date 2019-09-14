import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { HttpService } from "../http.service";
import { IResultInfo, IAirportInfo } from "../iresult";


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnChanges, OnInit {
  @Input() airportid : string;
  _airportid : string;
  airportInfo : IAirportInfo;
  resultInfo : IResultInfo;
  weatherImg: string;


  ngOnChanges(changes: SimpleChanges): void {
    const airportid : SimpleChange = changes.airportid;
    // console.log('prev value: ', airportid.previousValue);
    // console.log('got name: ', airportid.currentValue);
    this._airportid = airportid.currentValue;
    this._getAirport(this._airportid);
    this._getResult(this._airportid);
  }



  constructor(private _hs: HttpService) { }

  ngOnInit() {
    this._getAirport(this._airportid);
    this._getResult(this._airportid);
  }


  private _getAirport(id){
    let obs = this._hs.getAirport(id);
    obs.subscribe(data => {
      this.airportInfo = data[0];
    })
  };


  private _getResult(id){
    let obs = this._hs.getResult(id);
    obs.subscribe(data => {
      this.resultInfo = data;
      this.weatherImg = "../../assets/image/weather/" + data.weather +".png";
    })
  };


}

