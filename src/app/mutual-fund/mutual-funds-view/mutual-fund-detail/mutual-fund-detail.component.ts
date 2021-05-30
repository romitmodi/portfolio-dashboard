import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ChartConfig } from 'src/app/common/model/chart-config.model';
import { FundDetail } from '../../model/fund-detail.model';
import { MutualFundService } from '../../services/mutual-funds.service';

@Component({
  selector: 'app-mutual-fund-detail',
  templateUrl: './mutual-fund-detail.component.html',
  styleUrls: ['./mutual-fund-detail.component.css']
})
export class MutualFundDetailComponent implements OnInit, OnDestroy {

  @ViewChild('fundDetailForPortfolio') fundDetailForm: NgForm;
  fundDetailSubscription: Subscription;
  fundDetails: FundDetail;
  currentNav: number;
  changePercent: number;
  chartConfig: ChartConfig;
  addFundToPortfolio: boolean = false;

  constructor(private mutualFundService: MutualFundService) {
    this.chartConfig = new ChartConfig('Line', [], ['Date', 'Nav'], {
      'hAxis': {
        'title': 'Date'
      },
      'vAxis': {
        'title': 'Nav'
      }
    }, '400', '800');
  }

  ngOnInit(): void {
    this.fundDetailSubscription = this.mutualFundService.fundDetailSubject
      .subscribe(fundDetail => {
        this.fundDetails = fundDetail;
        this.currentNav = +this.fundDetails.data[0].nav;
        const yesterdayNav = this.fundDetails.data.length >= 2 ? +this.fundDetails.data[1].nav : this.currentNav;
        this.changePercent = (this.currentNav - yesterdayNav) / (yesterdayNav)
        this.chartConfig.data = [];
        this.fundDetails.data.forEach(data => {
          this.chartConfig.data.push([data.date, +data.nav]);
        });
        this.chartConfig.data.reverse();
      });
  }

  onAddFundToMyPortfolio() {
    this.addFundToPortfolio = true;
  }

  onAddFund() {
    console.log(this.fundDetailForm.value);
    this.mutualFundService.addFundToUserPortfolio();
    this.addFundToPortfolio = false;
  }

  onCancel() {
    this.addFundToPortfolio = false;
  }

  ngOnDestroy(): void {
    this.fundDetailSubscription.unsubscribe();
  }
}
