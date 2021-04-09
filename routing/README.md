<p>import {Route, RouterModule} from "@angular/router";</p> 

<p>const appRoutes: Route =[  <br>
{ path: '', component: HomeComponent }, <br>
{ path: 'users', component: UsersComponent }, <br>
{ path: 'servers', component: ServerComponent }, <br>
];</p>

<hr>

<p> imports: [
    BrowserModule, <br>
    FormsModule, <br>
    <h3>RouterModule.forRoot(appRoutes)</h3> <br>
  ],</p>

<p> <strong>forRoot</strong> use to register</p>

<hr>

<p>routerLinkActive="active" - to set active </p>
<p>[routerLinkActiveOptions]="{exact: true}" - full path router link</p>

<hr>

<p>onLoadServers() { <br>
    this.router.navigate(['/servers']); <br>
  }
<br> programmatically navigate.</p>

<hr>

<p>this.user = { <br>
      id: this.route.snapshot.params['id'], <br>
      name: this.route.snapshot.params['name'] <br>
    };
<br> fetch data from path</p>
