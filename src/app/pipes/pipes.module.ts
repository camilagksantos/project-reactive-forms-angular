import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaritalStatusPipe } from './marital-status.pipe';



@NgModule({
  declarations: [
    MaritalStatusPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MaritalStatusPipe
  ]
})
export class PipesModule { }
