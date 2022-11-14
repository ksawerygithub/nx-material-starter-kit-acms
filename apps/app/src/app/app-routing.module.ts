import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ProductFormComponentModule} from "./components/product-form/product-form.component-module";
import { ProductServiceModule } from './services/product.service-module';
import {ProductFormComponent} from "./components/product-form/product-form.component";

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'product', component: ProductFormComponent }]), ProductFormComponentModule, ProductServiceModule],
  providers: [],
  declarations: [],
  exports: []
})
export class AppRoutingModule {
}
