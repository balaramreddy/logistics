import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userlist:User[]=[];

  User: any = ['SuperAdmin', 'Admin', 'User'];
  
  constructor(private us:UserService) { }

  ngOnInit(): void {
  }

  submit(registerform:NgForm){
    const post={
      id:registerform.value.id,
      username:registerform.value.username,
      email:registerform.value.email,
      password:registerform.value.password,
      designation:registerform.value.designation
    }
    this.us.createuser(post).subscribe((data:any)=>{
      console.log(data)
    })
    console.log(registerform.value)
    registerform.reset()
  }
}
