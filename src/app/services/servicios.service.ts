import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiciosService {
  gender: any;
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get('https://thronesapi.com/api/v2/Characters');
  }
}
