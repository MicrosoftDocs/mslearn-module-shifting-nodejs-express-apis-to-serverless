import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import { Vacation } from '../core';

@Component({
  selector: 'app-vacation-list',
  template: `
    <ul class="list">
      <li
        *ngFor="let vacation of vacations; trackBy: byId; let i = index"
        role="presentation"
      >
        <div class="card">
          <app-card-content
            [name]="vacation.name"
            [description]="vacation.description"
          ></app-card-content>
          <footer class="card-footer">
            <app-button-footer
              class="card-footer-item"
              [className]="'delete-item'"
              [iconClasses]="'fas fa-trash'"
              (clicked)="deleteVacation($event)"
              label="Delete"
              [item]="vacation"
            ></app-button-footer>
            <app-button-footer
              class="card-footer-item"
              [className]="'edit-item'"
              [iconClasses]="'fas fa-edit'"
              (clicked)="selectVacation($event)"
              label="Edit"
              [item]="vacation"
            ></app-button-footer>
          </footer>
        </div>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VacationListComponent {
  @Input() vacations: Vacation[];
  @Input() selectedVacation: Vacation;
  @Output() deleted = new EventEmitter<Vacation>();
  @Output() selected = new EventEmitter<Vacation>();

  selectVacation(vacation: Vacation) {
    this.selected.emit(vacation);
  }

  deleteVacation(vacation: Vacation) {
    this.deleted.emit(vacation);
  }

  byId(vacation: Vacation) {
    return vacation.id;
  }
}
