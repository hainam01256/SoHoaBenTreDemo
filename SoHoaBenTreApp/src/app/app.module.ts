import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { HoSoModule } from './ho-so/ho-so.module';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent, ErrorPageComponent, TrangChuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    //config router, an other router must be placed before AppRoutingModule
    HoSoModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
