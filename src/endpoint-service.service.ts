import { Injectable } from '@angular/core';
import { UserInterface } from './app/user-interface';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EndpointServiceService {

  constructor(private http: HttpClient) { }

  private endpoint = 'https://jsonplaceholder.typicode.com/users';

  getUser(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(this.endpoint);
  }
}
