import { Injectable } from '@angular/core';
import { Record } from './record.model';
import { HttpClient, HttpHeaders, HttpHandler } from "@angular/common/http"
import { RecordFormComponent } from '../record-form/record-form.component';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  constructor(private http: HttpClient) {  
    for (this.i = 0; this.i < 50; this.i++){
      this.yearList[this.i] = 2015 + this.i;
    }
  }

  dt: Date = new Date();
  i: number = 0;
  monthList: string[] = [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ];
  yearList: number[] = [];
  formData: Record = new Record();
  list: Record[] = [];

  baseUrl = "api/Records"

  postRequest(){
    console.log(this.formData);
    return this.http.post(this.baseUrl, this.formData);
  }

  getRequest(){
    this.http.get(this.baseUrl).toPromise().then(res => this.list = res as Record[])
  }

  putRequest(){
    return this.http.put(`${this.baseUrl}/${this.formData.id}`, this.formData);
  }

  refresh(){
    this.formData = new Record();
  }
}
