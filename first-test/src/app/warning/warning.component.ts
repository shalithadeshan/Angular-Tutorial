import { Component } from '@angular/core';

@Component ({
  selector: 'app-warning',
  template: `
    <p>This is a warning, you are in danger!</p>
  `,
  styles: [`
    p {
      padding: 20px;
      background-color: mistyrose;
      border: 1px solid red;
      border-radius: 5px;
      margin-top: 20px;
    }
  `]

})

export class WarningComponent {}
