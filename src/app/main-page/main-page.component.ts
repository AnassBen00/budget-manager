import { Component } from '@angular/core';
import { AddItemFormComponent } from "../add-item-form/add-item-form.component";
import { BudgetItemListComponent } from "../budget-item-list/budget-item-list.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [AddItemFormComponent, BudgetItemListComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
