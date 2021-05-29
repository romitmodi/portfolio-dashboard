import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FundDetails } from '../../model/fund-detail.model';
import { MutualFundService } from '../../services/mutual-funds.service';

@Component({
  selector: 'app-mutual-fund-detail',
  templateUrl: './mutual-fund-detail.component.html',
  styleUrls: ['./mutual-fund-detail.component.css']
})
export class MutualFundDetailComponent implements OnInit, OnDestroy {

  fundDetails: FundDetails;
  fundDetailSubscription: Subscription;

  columnnames: string[] = ['date', 'nav'];
  type: string = 'Line';
  width = 800;
  height = 400;
  data = [];
  options = {
    hAxis: {
      title: 'Date'
    },
    vAxis: {
      title: 'Nav'
    }
  };

  constructor(private mutualFundService: MutualFundService) { }

  ngOnInit(): void {
    this.fundDetailSubscription = this.mutualFundService.fundDetailSubject
      .subscribe(fundDetail => {
        this.data = [];
        this.fundDetails = fundDetail;
        this.fundDetails.data.forEach(data => {
          this.data.push([data.date, +data.nav]);
        });
        this.data.reverse();
      });
  }

  ngOnDestroy(): void {
    this.fundDetailSubscription.unsubscribe();
  }
}
