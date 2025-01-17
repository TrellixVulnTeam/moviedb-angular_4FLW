import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

/**
 * This file contains functions that send GET requests to backand server
 */


@Injectable({
  providedIn: 'root'
})

export class Service{
  private REST_API_SERVER = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {
  }

  getSearchResult(term): Observable<any>{
    return this.httpClient.get(this.REST_API_SERVER + '/search/' + term);
  }

  getCurrPlayingExpress(): Observable<any>{
    return this.httpClient.get(this.REST_API_SERVER + '/');
  }

  getDetail(id, type): Observable<any>{
    return this.httpClient.get(this.REST_API_SERVER + '/watch/' + type + '/' + id);
  }

  getCastDetail(id): Observable<any>{
    return this.httpClient.get(this.REST_API_SERVER + '/person/' + id);
  }
}
