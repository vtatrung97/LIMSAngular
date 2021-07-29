import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  _httpClient: HttpClient;
  constructor(http: HttpClient) {
    this._httpClient = http;
  }

  getPatientList():Observable<HttpResponse<any>>  {
    return this._httpClient.get<any>('http://localhost:4080/Patient?_sort=-_lastUpdated&_count=75&_skip=0');
  }
}
