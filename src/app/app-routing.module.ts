import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//aqui las paginas
import {HomeComponent} from './pages/home/home.component';
import {ContactComponent} from './pages/contact/contact.component';
import {AboutComponent} from './pages/about/about.component';
import {ClassesComponent} from './pages/classes/classes.component';
import {ResourcesComponent} from './pages/resources/resources.component';
import {EmployeeComponent} from './components/employee/employee.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent},
  { path: 'classes', component: ClassesComponent},
  { path: 'resources', component: ResourcesComponent},
  { path: 'employee', component: EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
