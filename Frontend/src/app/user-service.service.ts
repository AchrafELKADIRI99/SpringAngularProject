import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './model/user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/api';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }
  public findOne(id: String): Observable<User> {
    return this.http.get<User>(this.usersUrl + '/' + id);
  }
  public update(user: User, id: String) {
    return this.http.patch<User>(this.usersUrl + '/' + id, user);
  }
  public delete(id: String) {
    return this.http.delete<User>(this.usersUrl + '/' + id);
  }
}
