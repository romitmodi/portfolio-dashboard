import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './authentication/auth/auth.component';
import { SummaryViewComponent } from './summary/summary-view/summary-view.component';
import { SharesViewComponent } from './shares/shares-view/shares-view.component';
import { MutualFundsViewComponent } from './mutual-fund/mutual-funds-view/mutual-funds-view.component';
import { BondsViewComponent } from './bonds/bonds-view/bonds-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent,
    SummaryViewComponent,
    SharesViewComponent,
    MutualFundsViewComponent,
    BondsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
