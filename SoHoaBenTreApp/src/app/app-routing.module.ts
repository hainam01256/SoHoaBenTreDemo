import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoSoComponent } from './ho-so/ho-so.component';

const routes: Routes = [
  {path: 'quan-ly-ho-so', component: HoSoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
