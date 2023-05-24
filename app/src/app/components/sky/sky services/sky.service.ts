import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkyService {
  constructor(private http: HttpClient) {}

  getSky(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/SKY');
  }
}
