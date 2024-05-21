import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionFiltriComponent } from './accordion-filtri.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../button/button.module';



@NgModule({
  declarations: [
    AccordionFiltriComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  exports: [
    AccordionFiltriComponent
  ]
})
export class AccordionFiltriModule { }
