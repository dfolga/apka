import { Injectable } from '@angular/core';
import { UserDetail } from './user-detail.model';
import {HttpClient}from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UserDetailService {
  formData: UserDetail;
  readonly rootURL = 'https://localhost:44309/api';
  list: UserDetail[];
 
  constructor(public http:HttpClient) { }

  postUserDetail() {
    return this.http.post(this.rootURL + '/Users', this.formData);
  }
  putUserDetail() {
    return this.http.put(this.rootURL + '/Users/'+ this.formData.UserId, this.formData);
  }
  deleteUserDetail(id) {
    return this.http.delete(this.rootURL + '/Users/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/Users')
    .toPromise()
    .then(res => this.list = res as UserDetail[]);
  }
}
