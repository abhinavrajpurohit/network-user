/**
 |--------------------------------------------------------------
 | HTTP Service!!
 | @version 1.0.0
 |--------------------------------------------------------------
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserListData } from '../interfaces/user';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

/*
* Http API Service
*/
export class HttpService {

  // Base url
  baseurl = 'https://reqres.in/api';

  /*
  * Service Constructor
  */
  constructor(private http: HttpClient) { }

  /**
   * This is a get function in service.
   * @version 1.0.0
   * @param string value - api url
   * @return Return a observable
   * @example
   * GetAll('http://abc.com')
   */
  GetAll(apiUrl): Observable<HttpResponse<UserListData>> {
    return this.http.get<UserListData>(`${this.baseurl}${apiUrl}`, { observe: 'response' })
      .pipe(
        retry(1),
        catchError(this.errorHandle)
      );
  }

  /**
   * This is a error handling function in service.
   * @version 1.0.0
   * @param object - error object
   * @return throw a error
   * @example
   * errorHandle({error: {message: 'Error in ...'}})
   */
  errorHandle(error) {
    // Differentiate between client and server side error
    const errorMessage = (error.error instanceof ErrorEvent) ? error.error.message :
      `Error Code: ${error.status}\nMessage: ${error.message}`;
    return throwError(errorMessage);
  }

}
