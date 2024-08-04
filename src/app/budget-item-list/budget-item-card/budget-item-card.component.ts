import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrl: './budget-item-card.component.scss'
})
export class BudgetItemCardComponent {

  @Input() isIncome = true;


}
