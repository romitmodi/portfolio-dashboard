import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { FundDetails } from "../model/fund-detail.model";
import { FundSearchResult } from "../model/fund-search-result.model";

@Injectable({ providedIn: 'root' })
export class MutualFundService {

    fundDetailSubject = new Subject<FundDetails>()

    constructor(private httpClient: HttpClient) { }

    searchFunds(query: string) {
        return this.httpClient
            .get<FundSearchResult[]>(
                environment.mfApi + 'search',
                { params: new HttpParams().set('q', query) }
            );
    }

    getFundDetails(schemeCode: string) {
        this.httpClient.get<FundDetails>(
            environment.mfApi + schemeCode
        ).subscribe(fundDetails => {
            this.fundDetailSubject.next(fundDetails);
        });
    }

}