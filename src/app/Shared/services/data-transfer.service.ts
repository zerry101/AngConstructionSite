import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataTransferService {
  baseURL = 'http://localhost:5000';

  constructor(public http: HttpClient) {}

  postData(data: any) {
    console.log('here is postDATA');

    console.log(data);

    return this.http.post<any>(`${this.baseURL}/postContactFormData`, data);
  }
}
