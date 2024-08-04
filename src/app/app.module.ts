import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BudgetItemCardComponent } from './budget-item-list/budget-item-card/budget-item-card.component';
import { BudgetItemListComponent } from './budget-item-list/budget-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemFormComponent,
    MainPageComponent,
    BudgetItemCardComponent,
    BudgetItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
