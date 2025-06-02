import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaritalStatusPipe } from './marital-status.pipe';
import { CpfPipe } from './cpf.pipe';

@NgModule({
  declarations: [	
    MaritalStatusPipe,
    CpfPipe,
    
   ],
  imports: [
    CommonModule
  ],
  exports: [
    MaritalStatusPipe,
    CpfPipe,
    
  ]
})
export class PipesModule { }
