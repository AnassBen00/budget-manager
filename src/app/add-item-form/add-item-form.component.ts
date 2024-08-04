import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrl: './add-item-form.component.scss'
})
export class AddItemFormComponent {

  @Input() item: BudgetItem = new BudgetItem('', null);
  @Output() formSubmit : EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>
  
  onSubmit(form: NgForm){
    this.formSubmit.emit(form.value);
}
}
