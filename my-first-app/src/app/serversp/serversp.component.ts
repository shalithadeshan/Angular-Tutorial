import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-serversp]',
  // selector: '.app-serversp',
  selector: 'app-serversp',
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./serversp.component.css']
})
export class ServerspComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
