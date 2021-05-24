import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { HoSoComponent } from './ho-so.component';


@NgModule({
  declarations: [
    HoSoComponent
  ],
  imports: [
    CommonModule,
    NgxExtendedPdfViewerModule
  ],
  exports: [HoSoComponent]
})
export class HoSoModule { }
