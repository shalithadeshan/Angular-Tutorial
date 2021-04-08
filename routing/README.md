<p>import {Route, RouterModule} from "@angular/router";</p> 

<p>const appRoutes: Route =[  <br>
{ path: '', component: HomeComponent }, <br>
{ path: 'users', component: UsersComponent }, <br>
{ path: 'servers', component: ServerComponent }, <br>
];</p>

<p> imports: [
    BrowserModule, <br>
    FormsModule, <br>
    <h3>RouterModule.forRoot(appRoutes)</h3> <br>
  ],</p>

<p> <strong>forRoot</strong> use to register</p>

<p>routerLinkActive="active" - to set active </p>
<p>[routerLinkActiveOptions]="{exact: true}" - full path router link</p>

<p>onLoadServers() { <br>
    this.router.navigate(['/servers']); <br>
  }
<br> programmatically navigate.</p>

<p>this.user = { <br>
      id: this.route.snapshot.params['id'], <br>
      name: this.route.snapshot.params['name'] <br>
    };
<br> fetch data from path</p>
