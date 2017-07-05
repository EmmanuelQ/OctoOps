import { Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from './models/user';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';




@Injectable()
export class UserAuthService {
	private authUrl: string = 'api/userauth';
	private headers = new Headers({'Content-type': 'application/json'});



  	constructor(private http: Http) {}

	authUser(): Observable<User>{
	  	return this.http.post(this.authUrl, {headers: this.headers })
	  					.map(response => response.json() as User);
	  					


	}



}
