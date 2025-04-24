import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material/angular-material.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    PipesModule
  ],
  exports: [ ]
})
export class ComponentsModule { }
