import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { BondsViewComponent } from "./bonds/bonds-view/bonds-view.component";
import { MutualFundsViewComponent } from "./mutual-fund/mutual-funds-view/mutual-funds-view.component";
import { SharesViewComponent } from "./shares/shares-view/shares-view.component";
import { SummaryViewComponent } from "./summary/summary-view/summary-view.component";

const routes: Route[] = [
    { path: '', component: AppComponent },
    { path: 'summary', component: SummaryViewComponent },
    { path: 'shares', component: SharesViewComponent },
    { path: 'mutual-funds', component: MutualFundsViewComponent },
    { path: 'bonds', component: BondsViewComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }