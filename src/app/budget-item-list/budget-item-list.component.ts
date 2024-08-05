import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BudgetItemCardComponent } from "./budget-item-card/budget-item-card.component";
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrl: './budget-item-list.component.scss'
})
export class BudgetItemListComponent {

  @Input() itemsArray!: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  deleteItem(item: BudgetItem) {
    this.delete.emit(item);
  }
}
