import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { HoSoModule } from './ho-so/ho-so.module';

@NgModule({
  declarations: [
    AppComponent, ErrorPageComponent, TrangChuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HoSoModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
