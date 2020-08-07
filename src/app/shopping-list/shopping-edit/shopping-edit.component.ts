import { Component, OnInit, EventEmitter, Output, ViewChild, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../ShoppingListService.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  selectedItem: Ingredient;
  @ViewChild("f", { static: false }) form: NgForm;
  subsscription: Subscription;
  editMode: boolean = false;
  selectedItemIndex: number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subsscription = this.shoppingListService.shoppingItemSelected.subscribe(
      (index: number) => {
        this.editMode = true;
        this.selectedItemIndex = index;
        this.selectedItem = this.shoppingListService.getItemByIndex(index);
        this.form.setValue({
          'name': this.selectedItem.name,
          'amount': this.selectedItem.amount
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    if (!this.editMode) {
      this.shoppingListService.addIngredient(new Ingredient(value.name, value.amount));
    } else {
      //autpmatically updates the element in the ingredients array in the service since objects are referenced types
      this.selectedItem.amount = value.amount;
      this.selectedItem.name = value.name;
      this.editMode = false;
    }
    form.reset();
  }

  onClear() {
    this.form.reset();
    this.editMode = false;
  }

  onDelete() {
    if (this.editMode) {
      this.shoppingListService.deleteItem(this.selectedItemIndex);
      this.onClear();
    }
  }

  ngOnDestroy() {
    this.subsscription.unsubscribe();
  }

}
