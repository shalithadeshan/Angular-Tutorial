import { Component, EventEmitter, Output } from '@angular/core';
import {logging} from "protractor";
import {LoginService} from "../login.service";
import {AccountsService} from "../accounts.service";
// import { LoginService } from "../login.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoginService, AccountsService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loginService: LoginService,
    private accountService: AccountsService) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('New Status ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.accountService.addAccount(accountName, accountStatus);
    // this.loginService.logStatusChange(accountStatus);
    // const service = new LoginService();
    // service.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);

  }
}
