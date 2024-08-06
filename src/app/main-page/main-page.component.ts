import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  items: BudgetItem[] = new Array<BudgetItem>();
  total: number = 0;

  addItem(newitem: BudgetItem){
    this.items.push(newitem);
    if(newitem.amount)
      this.total += newitem.amount;
  }

  deleteItem(item: BudgetItem){
    this.items.splice(this.items.indexOf(item),1);
    if(item.amount)
      this.total -= item.amount;
  }

  updateItem(newAndOld: [BudgetItem, BudgetItem]) {
    // mettre à jour l'ancien item par le nouveau item
    this.items[this.items.indexOf(newAndOld[0])] = newAndOld[1];
    if(newAndOld[0].amount && newAndOld[1].amount){
      this.total -= newAndOld[0].amount;
      this.total += newAndOld[1].amount; 
    }
    
  }

}


