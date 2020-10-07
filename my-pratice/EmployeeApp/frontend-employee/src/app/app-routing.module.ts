import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component'
import { CreateEmployeeComponent } from './create-employee/create-employee.component'

const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'list', component: EmployeeListComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'edit/:id', component: CreateEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
