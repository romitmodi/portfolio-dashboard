import { Component, Input, OnInit } from '@angular/core';
import { FundDetails } from '../../model/fund-detail.model';

@Component({
  selector: 'app-mutual-fund-detail',
  templateUrl: './mutual-fund-detail.component.html',
  styleUrls: ['./mutual-fund-detail.component.css']
})
export class MutualFundDetailComponent implements OnInit {

  @Input('fundDetail') fundDetails: FundDetails;

  columnnames: string[] = ['date', 'nav'];
  type: string = 'Line';
  data = [];

  options = {
    hAxis: {
      title: 'Date'
    },
    vAxis: {
      title: 'Nav'
    }
  };
  width = 800;
  height = 400;

  constructor() { }

  ngOnInit(): void {
    console.log(this.fundDetails);
    this.fundDetails.data.forEach(data => {
      this.data.push([data.date, +data.nav]);
      this.data.sort((d1, d2) => (new Date(d2['date']).getTime() - new Date(d1['date']).getTime()));
    });
    console.log(this.data);
  }

}
