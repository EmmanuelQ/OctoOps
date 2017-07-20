import { Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {UserAuthService} from '../userauth.service';
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

	
	constructor(private formBuilder: FormBuilder,
				private userAuth: UserAuthService,
				private router: Router){

		this.createForm();
		this.router.events.subscribe(function(event){

		});
	}


	createForm(){
		this.loginForm = this.formBuilder.group({
			userName: ['', Validators.required],
			password: ['', Validators.required]
		})
	}

	onSubmit(){
		const userCred = this.loginForm.value;
		console.log("trying to do some shit");
		this.userAuth.authenticate(userCred.userName, userCred.password)
					 .subscribe((data)=>{
					 	this.router.navigate(['./home']);
					 	//console.log(data.email);
					 });
	}

	//shows and hides thepsinner when naivation events occur
	navigationInterceptor(event: RouterEvent): void{
		if (event instanceof NavigationStart){
			this.loading = true;
		}else if (event instanceof NavigationEnd){
			this.loading = false
		}else if (event instanceof NavigationCancel){
			this.loading = false;
		}else if (event instanceof NavigationError){
			this.loading = false;
		}
	}

}
