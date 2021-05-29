import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './authentication/auth/auth.component';
import { SummaryViewComponent } from './summary/summary-view/summary-view.component';
import { SharesViewComponent } from './shares/shares-view/shares-view.component';
import { MutualFundsViewComponent } from './mutual-fund/mutual-funds-view/mutual-funds-view.component';
import { BondsViewComponent } from './bonds/bonds-view/bonds-view.component';
import { MutualFundDetailComponent } from './mutual-fund/mutual-funds-view/mutual-fund-detail/mutual-fund-detail.component';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent,
    SummaryViewComponent,
    SharesViewComponent,
    MutualFundsViewComponent,
    BondsViewComponent,
    MutualFundDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    GoogleChartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
