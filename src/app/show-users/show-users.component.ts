import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../user-interface';
import { EndpointServiceService } from 'src/endpoint-service.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  userlist:UserInterface[] = [];  

  constructor( private enpointservice: EndpointServiceService ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.enpointservice.getUser().subscribe(user => this.userlist = user);
   }
  
   totalusers(): number {
    return this.userlist.length
  }
}
