import { Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	hoverDiv = document.createElement("div");

  constructor(private router : Router) { }

  ngOnInit() {
  	this.hoverDiv.style.position = "absolute";
  	this.hoverDiv.style.top = "1px";
  	this.hoverDiv.style.height = "30px";
  	this.hoverDiv.style.width = "60px";
  	this.hoverDiv.style.zIndex = "-1";
  	this.hoverDiv.style.borderRadius= "4px";
  	this.hoverDiv.style.backgroundColor= "grey";
  	this.hoverDiv.style.opacity= "0.1";

  }

  mouseOver(selection: string){
  	document.getElementById("mySelectionMenu").appendChild(this.hoverDiv);
  	this.hoverDiv.style.visibility = "visible";
  	switch (selection) {
  		case "stats":
  			this.hoverDiv.style.right = "176px";
  			break;
  		case "sales":
  			this.hoverDiv.style.right = "99px";
  			break;
  		case "stock":
  			this.hoverDiv.style.right = "19px";

  			break;
 
  	}
  }
  remove(){
  	this.hoverDiv.style.visibility = "hidden";
  }


  activate(selection: string){
  	switch (selection) {
  		case "stats":
  			document.getElementById("selectionBar").style.right = "181px";
        //this.router.navigate(['home/stats']);
  			break;
  		case "sales":
  		  	document.getElementById("selectionBar").style.right = "104px";

  			break;
  		case "stock":
  			document.getElementById("selectionBar").style.right = "25px";
        this.remove();
        this.router.navigate(['home/stock']);
  			break;
  		
  		default:
  			// code...
  			break;
  	}
  }

}
