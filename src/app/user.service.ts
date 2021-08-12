import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getuser(): Observable<User[]> {
    const url = 'http://localhost:3000/posts';
    return this.http.get<User[]>(url);
  }

  createuser(create): Observable<User[]> {
    const url = 'http://localhost:3000/posts';
    return this.http.post<User[]>(url, create);
  }
}
