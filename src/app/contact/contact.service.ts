import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url = 'https://jsonplaceholder.typicode.com/users';
  private contacts: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  users$ = this.contacts.asObservable();

  constructor(private http: HttpClient) { }

  getContact(){
    return this.http.get(this.url);
  }

  postContact(contact:any){
    return this.http.post(this.url, contact);
  }

  updateContact(contact:any){
    return this.http.put(this.url + '/' + contact.id, contact)
  }
}
