import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userlists:User[]=[];

  constructor(private us:UserService) { }

  ngOnInit(): void {
    this.us.getuser().subscribe((data:any)=>{
      console.log(data)
    })
  }

}
