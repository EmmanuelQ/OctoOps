import { Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from './models/user';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';
import 'rxjs';




@Injectable()
export class UserAuthService {
	private authUrl: string = 'userauth';
	



  	constructor(private http: Http) {}

	authenticate(username: string, password: string): Observable<User>{
		/*let headers = new Headers({'Content-type': 'application/json'});
		let options = new RequestOptions({ headers: headers });

	  	return this.http.post(this.authUrl, {username, password}, options)
	  					.map(response => response.json());
	  					
	  	*/
	  	return Observable.of({email: "emmanuelq38", password:"pass12"});

	}



}
