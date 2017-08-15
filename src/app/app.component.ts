//https://coursetro.com/posts/code/29/Working-with-Angular-2-Material
import { Component } from '@angular/core';
import {Http} from '@angular/http';  // <- This goes just below { Component } 
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  spaceScreens: Array<any>;


  constructor(private http:Http) {
    
  }
}