import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { FundSearchResult } from "../model/fund-search-result.model";

@Injectable({ providedIn: 'root' })
export class MutualFundService {

    constructor(private httpClient: HttpClient) { }

    searchFunds(query: string) {
        return this.httpClient
            .get<FundSearchResult[]>(
                environment.mfApi + 'search',
                { params: new HttpParams().set('q', query) }
            );
    }

    getFundDetails(schemeCode: string) {
        return this.httpClient.get(
            environment.mfApi + schemeCode
        ).subscribe(response => console.log(response));
    }

}