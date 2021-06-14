import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChiTietHoSoComponent } from './chi-tiet-ho-so/chi-tiet-ho-so.component';
import { DanhSachHoSoChoDuyetComponent } from './danh-sach-ho-so-cho-duyet/danh-sach-ho-so-cho-duyet.component';
import { DanhSachHoSoComponent } from './danh-sach-ho-so/danh-sach-ho-so.component';
import { DuyetHoSoComponent } from './duyet-ho-so/duyet-ho-so.component';
import { ThemHoSoComponent } from './them-ho-so/them-ho-so.component';

const hoSoRoutes: Routes = [
  {
    path: 'quan-ly-ho-so/danh-sach-ho-so',component: DanhSachHoSoComponent
  },
  {
    path: 'quan-ly-ho-so/duyet-ho-so',component: DuyetHoSoComponent
  },
  {
    path: 'quan-ly-ho-so/danh-sach-ho-so-cho-duyet',component: DanhSachHoSoChoDuyetComponent
  },
  {
    path: 'quan-ly-ho-so/them-moi-ho-so', component: ThemHoSoComponent
  },
  {
    path: 'quan-ly-ho-so/chi-tiet-ho-so/:id', component: ChiTietHoSoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(hoSoRoutes)],
  exports: [RouterModule]
})
export class HoSoRoutingModule { }
