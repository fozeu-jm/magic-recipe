import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() onAddition = new EventEmitter<Ingredient>();

  constructor() { }
  
  ngOnInit(): void {
  }

  onAdd(nameInput, amountInput){
    this.onAddition.emit(new Ingredient(nameInput.value, amountInput.value));
  }

}
