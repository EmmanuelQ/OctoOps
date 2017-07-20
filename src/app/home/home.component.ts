import { Component, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	hoverDiv = document.createElement("div");

  constructor() { }

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
  		
  		default:
  			// code...
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
  			break;
  		case "sales":
  		  	document.getElementById("selectionBar").style.right = "104px";

  			break;
  		case "stock":
  			document.getElementById("selectionBar").style.right = "25px";

  			break;
  		
  		default:
  			// code...
  			break;
  	}
  }

}
