import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  showAddButton:boolean;
  constructor(private router : Router){

  }
  addNewProduct(){
    this.showAddButton = false;
    this.router.navigate(['new'])
  }

  goToHomeScreen(){
    this.showAddButton = true;
    this.router.navigate([''])
  }

  ngOnInit(){
    this.showAddButton = true;
  }
}
