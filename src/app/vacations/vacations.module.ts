import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VacationsComponent } from './vacations.component';
import { VacationListComponent } from './vacation-list.component';
import { VacationDetailComponent } from './vacation-detail.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: VacationsComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule, VacationsComponent],
  declarations: [
    VacationsComponent,
    VacationListComponent,
    VacationDetailComponent
  ]
})
export class VacationsModule {}
