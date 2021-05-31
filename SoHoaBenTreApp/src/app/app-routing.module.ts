import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HoSoComponent } from './ho-so/ho-so.component';

const routes: Routes = [
  { path: '', redirectTo: 'trang-chu' ,pathMatch:'full'},
  {path: 'quan-ly-ho-so', component: HoSoComponent},
  {path: 'error-page', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
