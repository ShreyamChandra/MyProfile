import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-nav-bar-simple',
  templateUrl: './nav-bar-simple.component.html',
  styleUrls: ['./nav-bar-simple.component.scss']
})
export class NavBarSimpleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openNav(){
    console.log("burger clicked");
    document.getElementById("mobile-navigation")!.style.width="100%";    
  }
  closeNav(){
    console.log("burger clicked");
    setTimeout(function() {
      //your code to be executed after 200 milli-second
      document.getElementById("mobile-navigation")!.style.width="0%";    
    }, 200);
  }
}
