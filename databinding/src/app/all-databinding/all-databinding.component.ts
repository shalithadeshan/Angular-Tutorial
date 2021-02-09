import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-databinding',
  templateUrl: './all-databinding.component.html',
  styleUrls: ['./all-databinding.component.css']
})
export class AllDatabindingComponent implements OnInit {
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;

  constructor() { }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server Was Created! Name is ' + this.serverName;
  }

}
