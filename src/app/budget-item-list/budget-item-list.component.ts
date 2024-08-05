import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { EditItemComponent } from '../edit-item/edit-item.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrl: './budget-item-list.component.scss'
})
export class BudgetItemListComponent {

  @Input() itemsArray!: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor(public dialog: MatDialog){}

  deleteItem(item: BudgetItem) {
    this.delete.emit(item);
  }

  editItem(item: BudgetItem) {
    //Afficher la popup pour modifier un item
    const dialogRef = this.dialog.open(EditItemComponent, 
      {
        width: '580px',
        data: item
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      // Verifer si result n'est pas null
      if(result){
        // mettre à jour l'ancien item par le nouveau item
        this.itemsArray[this.itemsArray.indexOf(item)] = result;
      }
    })
  }

  
}
