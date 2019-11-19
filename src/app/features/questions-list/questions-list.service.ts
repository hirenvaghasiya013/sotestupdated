import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsListService {

  constructor( private http: HttpClient ) { }

  getAllQuesionList(): Observable<any>{
    return this.http.get('http://api.stackexchange.com/2.2/questions/featured?order=desc&sort=activity&site=stackoverflow');
  }

}
