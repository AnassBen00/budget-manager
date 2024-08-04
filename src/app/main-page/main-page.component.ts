import { Component } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  items: BudgetItem[] = new Array<BudgetItem>();

  addItem(newitem: BudgetItem){
    this.items.push(newitem);
  }

}
