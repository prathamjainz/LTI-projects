import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(){}

  menu_variable:boolean=true;   

  menu_open(){
    this.menu_variable =! this.menu_variable;
  }
}
