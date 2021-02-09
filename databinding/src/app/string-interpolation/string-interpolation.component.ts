import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css'],
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class StringInterpolationComponent implements OnInit {

  stringId: number=10;
  stringStatus: string='offline';

  getStringStatus(){
    return this.stringStatus;
  }
  constructor() {
    this.stringStatus = Math.random() > 0.5 ? 'online' : 'Offline';
  }

  ngOnInit(): void {
  }

  getColor() {
    return this.stringStatus === 'online' ? 'green' : 'red';
  }

}
