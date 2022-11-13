import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {ProductListComponentModule} from "./components/product-list/product-list.component-module";


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, MaterialModule, RouterModule, AppRoutingModule, ProductListComponentModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
