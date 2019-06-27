import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { DisplayComponent } from './display/display.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'',redirectTo:'/register',pathMatch:'full'},
  {path:'register',component:RegisterComponent,pathMatch:'full'},
  {path:'display',component:DisplayComponent,pathMatch:'full'},
  {path:'search',component:SearchComponent,pathMatch:'full'},
  {path:'**',redirectTo:'/register',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
