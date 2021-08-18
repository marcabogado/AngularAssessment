import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact/contact.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  contacts: any = [];

  constructor(private _contactService :  ContactService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this._contactService.getContact().subscribe((data:any)=>{this.contacts = data; console.log(this.contacts)})
  }
}
