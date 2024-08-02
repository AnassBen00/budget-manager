import { Component } from '@angular/core';
import { BudgetItemCardComponent } from "./budget-item-card/budget-item-card.component";

@Component({
  selector: 'app-budget-item-list',
  standalone: true,
  imports: [BudgetItemCardComponent],
  templateUrl: './budget-item-list.component.html',
  styleUrl: './budget-item-list.component.scss'
})
export class BudgetItemListComponent {

}
