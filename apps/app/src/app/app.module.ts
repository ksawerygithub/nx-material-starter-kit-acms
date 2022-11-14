import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";

import {ProductFormComponent} from "./components/product-form/product-form.component";
import {ProductServiceModule} from "./services/product.service-module";
import {ProductFormComponentModule} from "./components/product-form/product-form.component-module";


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, MaterialModule, RouterModule, AppRoutingModule, ProductServiceModule, ProductFormComponentModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
