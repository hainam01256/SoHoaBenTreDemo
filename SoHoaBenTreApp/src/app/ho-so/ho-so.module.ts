import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { HoSoComponent } from './ho-so.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    HoSoComponent
  ],
  imports: [
    CommonModule,
    NgxExtendedPdfViewerModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [HoSoComponent]
})
export class HoSoModule { }
