import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { ISearch } from './search';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl = 'https://od-api.oxforddictionaries.com:443/api/v1/entries/en/'
  private header: HttpHeaders = new HttpHeaders({
    Accept: "application/json",
    app_id: 'e7348a4c',
    app_key: '3b4bf5b2bbb1b3c4aa930c974b0b091c'
  })
  constructor(private http: HttpClient) { }
  searchWord(word: String): Observable<ISearch> {
    return this.http.get<ISearch>(`${word}`/* ${this.baseUrl}, { headers: this.header }*/)
                .pipe(
                  catchError(this.errorHandler)
                );
  }
  private errorHandler(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
