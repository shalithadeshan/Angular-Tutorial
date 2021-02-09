import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  serverCreationStatus = 'No server was created!';
  serverName = 'Test Server';
  constructor() {

  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }

  onUpdateServerName(event: any){
    // this.serverName = (<HTMLInputElement>event.target).value;
    this.serverName = event.target.value;
  }
}
