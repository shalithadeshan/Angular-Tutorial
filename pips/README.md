# Pips
<h3>THis basically allows transforming output in your template</h3>

<p>{{ server.instanceType | uppercase}} <br>
{{ server.started | date: 'fullDate'}}</p> 
<p>This is how add pips</p>

<hr>

<p>{{ server.started | date: 'fullDate' | uppercase}}</p>
<p>Chain multiple pips</p>
