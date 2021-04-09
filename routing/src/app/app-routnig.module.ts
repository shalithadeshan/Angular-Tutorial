import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {ServerComponent} from './servers/server/server.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuardService} from './auth-guard.service';
import {AuthService} from './auth.service';
import {CanDeactivateGuard} from './servers/edit-server/can-deactivate-guard.service';

const appRoutes: Routes = [
  { path: '**', redirectTo: '/not-found' }, // Redirecting and Wildcard Routes
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
      // dynamic path
      { path: 'users/:id/:name', component: UsersComponent }, // child (nested) routing
    ] },
  { path: 'servers',
    // canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    component: ServerComponent,
    children: [
      { path: ':id', component: ServerComponent }, // child (nested) routing
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] },
    ] },
  { path: 'not-found', component: PageNotFoundComponent },
];

@NgModule({
   imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutnigModule { }
