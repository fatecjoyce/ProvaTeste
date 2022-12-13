import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { count } from 'console';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  getUser(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/users'
    return this.http.get<any>(url);
  }
}