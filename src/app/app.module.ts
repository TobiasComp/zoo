import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './comps/general/header/header.component';
import { NavComponent } from './comps/general/nav/nav.component';
import { PaginatorComponent } from './comps/general/paginator/paginator.component';
import { FooterComponent } from './comps/general/footer/footer.component';
import { DomesticPanelComponent } from './comps/panels/domestic-panel/domestic-panel.component';
import { WildPanelComponent } from './comps/panels/wild-panel/wild-panel.component';
import { BirdPanelComponent } from './comps/panels/bird-panel/bird-panel.component';
import { BirdCardComponent } from './comps/cards/bird-card/bird-card.component';
import { WildCardComponent } from './comps/cards/wild-card/wild-card.component';
import { DomesticCardComponent } from './comps/cards/domestic-card/domestic-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    PaginatorComponent,
    FooterComponent,
    DomesticPanelComponent,
    WildPanelComponent,
    BirdPanelComponent,
    BirdCardComponent,
    WildCardComponent,
    DomesticCardComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
