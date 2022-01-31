import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './_models/user';
import { AccountService } from './_servies/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'client';
  users: any;

  constructor(private accountServcie: AccountService) {}


  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountServcie.setCurrentUser(user);
  }

}
