import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FundDetail } from '../../model/fund-detail.model';
import { MutualFundService } from '../../services/mutual-funds.service';

@Component({
  selector: 'app-mutual-fund-detail',
  templateUrl: './mutual-fund-detail.component.html',
  styleUrls: ['./mutual-fund-detail.component.css']
})
export class MutualFundDetailComponent implements OnInit, OnDestroy {

  fundDetails: FundDetail;
  fundDetailSubscription: Subscription;
  currentNav: number;
  changePercent: number;

  columnnames: string[] = ['date', 'nav'];
  type: string = 'Line';
  width = 700;
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
        this.currentNav = +this.fundDetails.data[0].nav;
        const yesterdayNav = this.fundDetails.data.length >= 2 ? +this.fundDetails.data[1].nav : this.currentNav;
        this.changePercent = (this.currentNav - yesterdayNav) / (yesterdayNav)
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
