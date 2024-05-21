import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { colori } from '../../shared/array/array.colori';

@Component({
  selector: 'app-accordion-filtri',
  templateUrl: './accordion-filtri.component.html',
  styleUrl: './accordion-filtri.component.css'
})
export class AccordionFiltriComponent {

  colori:Array<object> = colori;

  @Output() formEvent:EventEmitter<FormGroup> = new EventEmitter();
  @Output() accordionColorForm:EventEmitter<FormGroup> = new EventEmitter();
  @Output() accordionPriceEmit:EventEmitter<FormGroup> = new EventEmitter();
  @Output() clearButtonEmit:EventEmitter<string> = new EventEmitter();

  accordionForm:FormGroup = new FormGroup({
    'Running': new FormControl(false),
    'Basket': new FormControl(false),
    'Training': new FormControl(false),
    'Sneakers': new FormControl(false),
    'Trail Running': new FormControl(false)
  })

  accordionColor:FormGroup = new FormGroup({
    "Viola": new FormControl(false),
    "Nero": new FormControl(false),
    "Rosso": new FormControl(false),
    "Arancione": new FormControl(false),
    "Blu": new FormControl(false),
    "Bianco": new FormControl(false),
    "Marrone": new FormControl(false),
    "Verde": new FormControl(false),
    "Giallo": new FormControl(false),
    "Grigio": new FormControl(false),
    "Rosa": new FormControl(false)
  })

  accordionPrice:FormGroup = new FormGroup({
    inferiore50: new FormControl(false),
    da50a100: new FormControl(false),
    da100a150: new FormControl(false),
    superiore150: new FormControl(false)
  })

  constructor(){}

  onSubmit(){
    this.formEvent.emit(this.accordionForm);
  }

  onSubmitColor(){
    this.accordionColorForm.emit(this.accordionColor);
  }

  onSubmitPrice(){
    this.accordionPriceEmit.emit(this.accordionPrice);
  }

  onClear(){
    this.clearButtonEmit.emit()
    this.accordionForm.reset();
    this.accordionColor.reset();
    this.accordionPrice.reset();
  }


}
