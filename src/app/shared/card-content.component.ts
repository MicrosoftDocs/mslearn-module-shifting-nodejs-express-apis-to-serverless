import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-content',
  template: `
    <div class="card-content">
      <div class="content">
        <div class="name">{{ name }}</div>
        <div class="description">{{ description }}</div>
      </div>
    </div>
  `
})
export class CardContentComponent {
  @Input() name;
  @Input() description;
}
