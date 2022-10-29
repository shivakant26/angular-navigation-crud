import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable ,map} from 'rxjs';
import { RegisterUser } from 'src/Modal/registeruser';
import { Login } from 'src/Modal/login';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  errorData:any = {};
  constructor(private http:HttpClient) { }

  registerUser(registeruser : RegisterUser):Observable<any>{
    return this.http.post(`${environment.apiUrl}/register`,registeruser)
  }

  // loginUser(login:Login):Observable<any>{
  //   debugger;
  //   return this.http.post(`${environment.apiUrl}/login`,login)
  // }
  login(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/login`, {username: username, password: password})
    .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      }),
      catchError(this.errorData)
    );
    }
}
