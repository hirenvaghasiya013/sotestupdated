import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor( private http: HttpClient ) { }

  getUserByIds(id): Observable<any>{
    const urlId = `https://api.stackexchange.com/2.2/users/${id}?order=desc&sort=reputation&site=stackoverflow`;
    return this.http.get(urlId);
  }

  getTagsByUsers(id): Observable<any>{
    const urlId = `https://api.stackexchange.com/2.2/users/${id}/tags?order=desc&sort=popular&site=stackoverflow`;
    return this.http.get(urlId);
  }

  getQuestionofUsers(id): Observable<any>{
    const urlId = `https://api.stackexchange.com/2.2/users/${id}/questions?order=desc&sort=activity&site=stackoverflow`;
    return this.http.get(urlId);
  }
}
