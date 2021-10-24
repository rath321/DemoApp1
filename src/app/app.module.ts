import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { WriteComponent } from './ReadWrite/write/write.component';
import { ReadComponent } from './ReadWrite/read/read.component';
import { Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'write', component: WriteComponent},
  { path: 'read', component:  ReadComponent},
  {
    path:'', component:HeaderComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WriteComponent,
    ReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
