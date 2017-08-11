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
    
    this.http.get('./data.json')
      .map(response => response.json().screenshots)
      .subscribe(res => this.spaceScreens = res);
  }

  likeMe(i) {
    if (this.spaceScreens[i].liked == 0)
      this.spaceScreens[i].liked = 1;
    else
      this.spaceScreens[i].liked = 0;
  }

  deleteMe(i) {
    this.spaceScreens.splice(i,1);
    console.log(i);
  }
}