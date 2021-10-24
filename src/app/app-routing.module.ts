import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header/header.component';
import { ReadComponent } from './ReadWrite/read/read.component';
import { WriteComponent } from './ReadWrite/write/write.component';

const routes: Routes = [
  { path: 'write', component: WriteComponent},
  { path: 'read', component:  ReadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
