import { Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	heroForm: NgForm; // used to check for changes

	@ViewChild('heroForm') currentForm: NgForm;

	ngOnInit() {


	}


	submit(){
		
	}


}
