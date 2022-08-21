import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-serversp]',
  // selector: '.app-serversp',
  selector: 'app-serversp',
  // template: ` <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './serversp.component.html',
  styleUrls: ['./serversp.component.css'],
})
export class ServerspComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test server';
  serverCreated = false;
  servers = ['TestServer', 'Testserver1'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit(): void {}

  onCreateServer(): void {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server Created!';
  }

  onServerName(name: Event) {
    this.serverName = (<HTMLInputElement>name.target).value;
  }
}
