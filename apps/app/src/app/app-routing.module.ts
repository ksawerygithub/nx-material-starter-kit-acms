import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeComponentModule } from './components/employee/employee.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';


@NgModule({
  imports: [RouterModule.forRoot([{ path: 'product', component: EmployeeComponent }, { path: 'employee', component: EmployeeComponent }]), EmployeeComponentModule, EmployeeServiceModule, EmployeeComponentModule, EmployeeServiceModule],
  providers: [],
  declarations: [],
  exports: []
})
export class AppRoutingModule {
}
