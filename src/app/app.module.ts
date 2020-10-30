import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapPageComponent } from './bootstrap-page/bootstrap-page.component';
import { BasicCssPageComponent } from './basic-css-page/basic-css-page.component';

@NgModule({
  declarations: [AppComponent, BootstrapPageComponent, BasicCssPageComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
