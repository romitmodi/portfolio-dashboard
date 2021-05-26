import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FundSearchResult } from '../model/fund-search-result.model';
import { MutualFundService } from '../services/mutual-funds.service';

@Component({
  selector: 'app-mutual-funds-view',
  templateUrl: './mutual-funds-view.component.html',
  styleUrls: ['./mutual-funds-view.component.css']
})
export class MutualFundsViewComponent implements OnInit {

  @ViewChild('searchForm') searchForm: NgForm;

  fundSearchResultData: FundSearchResult[] = [];
  isSearchCompleted: boolean = false;

  constructor(private mutualFundService: MutualFundService) { }

  ngOnInit(): void {
  }

  onSearch() {
    const query = this.searchForm.value['mutualFundSearch'];
    this.isSearchCompleted = false;
    this.mutualFundService.searchFunds(query)
      .subscribe(searchResult => {
        this.fundSearchResultData = searchResult
        this.isSearchCompleted = true;
        console.log(this.fundSearchResultData);
      });
  }

  onGetFundDetails(schemeCode: string) {
    console.log(schemeCode);
    this.mutualFundService.getFundDetails(schemeCode);
  }

}
