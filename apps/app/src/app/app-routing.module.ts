import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';


@NgModule({
  imports: [RouterModule.forRoot([{ path: 'product', component: CategoriesComponent }, { path: 'employee', component: CategoriesComponent }, { path: 'chip', component: CategoriesComponent }, { path: 'categories', component: CategoriesComponent }]), CategoriesComponentModule, CategoriesServiceModule, CategoriesComponentModule, CategoriesServiceModule],
  providers: [],
  declarations: [],
  exports: []
})
export class AppRoutingModule {
}
