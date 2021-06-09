import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoSoRoutingModule } from './ho-so-routing.module';
import { DanhSachHoSoComponent } from './danh-sach-ho-so/danh-sach-ho-so.component';
import { ThemHoSoComponent } from './them-ho-so/them-ho-so.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from '@angular/material/expansion';
import { ChiTietHoSoComponent } from './chi-tiet-ho-so/chi-tiet-ho-so.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';


@NgModule({
  declarations: [DanhSachHoSoComponent,ThemHoSoComponent, ChiTietHoSoComponent],
  imports: [
    CommonModule,
    HoSoRoutingModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    NgxExtendedPdfViewerModule,
  ],
  exports:[
    DanhSachHoSoComponent,ThemHoSoComponent,ChiTietHoSoComponent,HoSoRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HoSoModule { }
