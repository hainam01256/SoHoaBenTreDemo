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
import { MatTableModule } from "@angular/material/table";
import { ChiTietHoSoComponent } from './chi-tiet-ho-so/chi-tiet-ho-so.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatBadgeModule } from "@angular/material/badge";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatDividerModule } from "@angular/material/divider";
import { MatCardModule } from "@angular/material/card";
import { DuyetHoSoComponent } from './duyet-ho-so/duyet-ho-so.component';
import { MatDatepickerModule } from "@angular/material/datepicker";
import {MatNativeDateModule} from '@angular/material/core';
import { DanhSachHoSoChoDuyetComponent } from './danh-sach-ho-so-cho-duyet/danh-sach-ho-so-cho-duyet.component';
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  declarations: [DanhSachHoSoComponent,ThemHoSoComponent, ChiTietHoSoComponent, DuyetHoSoComponent, DanhSachHoSoChoDuyetComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    NgxExtendedPdfViewerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDividerModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    HoSoRoutingModule
  ],
  exports:[
    DanhSachHoSoComponent,ThemHoSoComponent,ChiTietHoSoComponent, DuyetHoSoComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HoSoModule { }
