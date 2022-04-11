import { Component, OnInit } from '@angular/core';

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
    // console.log(document.getElementById("mobile-navigation"));
    
  }
  closeNav(){
    console.log("burger clicked");
    document.getElementById("mobile-navigation")!.style.width="0%";
    // console.log(document.getElementById("mobile-navigation"));
    
  }
}
