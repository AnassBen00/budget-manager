import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrl: './add-item-form.component.scss'
})
export class AddItemFormComponent implements OnInit{

  @Input() item!: BudgetItem
  @Output() formSubmit : EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>

  isNew!: boolean;

  ngOnInit(): void {
    if(this.item){
      this.isNew = false;
    }else {
      this.isNew = true;
      this.item = new BudgetItem('', null);
    }
  }
  
  onSubmit(form: NgForm){
    this.formSubmit.emit(form.value);
    form.reset();
  }
}
