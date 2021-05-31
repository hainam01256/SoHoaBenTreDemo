import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoSoModule } from './ho-so/ho-so.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { ErrorPageModule } from './error-page/error-page.module';

const routes: Routes = [
  {
      path: '',
      children: [
          {
              path:'',
              redirectTo: 'trang-chu', pathMatch: 'full'
          },
          {
              path        : 'trang-chu',
              loadChildren: './trang-chu/app.module#AppModule'
          },
          {
              path: '**',
              redirectTo: 'page-not-found',
          }
      ]
  }
  
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HoSoModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    RouterModule.forChild(routes),
    ErrorPageModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
