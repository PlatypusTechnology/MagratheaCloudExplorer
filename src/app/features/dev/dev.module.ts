import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './routes';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class DevModule { }
