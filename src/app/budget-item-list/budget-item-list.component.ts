import { Component, Input } from '@angular/core';
import { BudgetItemCardComponent } from "./budget-item-card/budget-item-card.component";
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrl: './budget-item-list.component.scss'
})
export class BudgetItemListComponent {

  @Input() itemsArray!: BudgetItem[];
}
