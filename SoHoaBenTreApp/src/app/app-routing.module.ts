import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';

import { TrangChuComponent } from './trang-chu/trang-chu.component';

const routes: Routes = [
  { path: '', redirectTo: 'trang-chu' ,pathMatch:'full' },
  { path: 'trang-chu', component: TrangChuComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
