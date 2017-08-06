import { Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {UserAuthService} from '../userauth.service';
import {Observable} from 'rxjs/Observable';
import {Router,
		Routes,
		Event as RouterEvent,
		NavigationStart,
		NavigationEnd,
		NavigationCancel,
		NavigationError} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserAuthService]
})
export class LoginComponent{
	loginForm:FormGroup;
	loading:boolean = false;
	token:string;
	
	constructor(private formBuilder: FormBuilder,
				private userAuth: UserAuthService,
				private router: Router){

		this.createForm();

	}


	createForm(){
		this.loginForm = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
		})
	}

	onSubmit(){
		const userCred = this.loginForm.value;
		this.userAuth.authenticate(userCred.username, userCred.password)
					 .subscribe((data) => {
					 				let token = data.token;
					 				if(token){
					 					localStorage.setItem('userToken', token);

					 					this.router.navigate(['/home']);
					 				}else{
					 					console.error("token missing");
					 				}
					 			},
					 			err => console.error(err));
	}


}
