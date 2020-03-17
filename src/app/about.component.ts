import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="content-container">
      <div class="content-title-group not-found">
        <h2 class="title">Vacation Wish List</h2>
        <p>
          This project was created to help represent a fundamental app written
          with Angular. The vacations theme is used throughout the app.
        </p>
        <br />
        <h2 class="title">Resources</h2>
        <ul>
          <li>
            <a
              href="https://github.com/MicrosoftDocs/mslearn-module-shifting-nodejs-express-apis-to-serverless"
              >Code in GitHub</a
            >
          </li>
        </ul>
      </div>
    </div>
  `
})
export class AboutComponent {}
