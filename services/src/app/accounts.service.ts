import {generateInlineTypeCtor} from "@angular/compiler-cli/src/ngtsc/typecheck/src/type_constructor";
import {LoginService} from "./login.service";
import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class AccountsService{
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loginservice: LoginService) {
  }

  addAccount(name: string, status: string){
    this.accounts.push({name: name, status: status});
    this.loginservice.logStatusChange(status);
  }
  updateStatus(id: number, status: string){
    this.accounts[id].status = status;
    this.loginservice.logStatusChange(status);
  }
}
