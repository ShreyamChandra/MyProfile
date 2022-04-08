import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

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
