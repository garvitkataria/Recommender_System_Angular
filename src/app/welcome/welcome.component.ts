import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
	message2 = 'Hola Mundo!';
body=
		{
		    "username": "",
		    "email": "",
		    "password": "password",
		    "mobile_no": "",
		}
user="";
public userObject = 
 {
  email : "",
  mobile_no  : "",
  id:""
 }
  constructor(private dataService:DataService,private router: Router) { }

  ngOnInit() {
  }
  addUser(e,m)
  {
  	console.log("Add User")
  	console.log(e)
  	console.log(m)
  	const u=String(Math.floor((Math.random()*99999999)+1))
  	console.log(u)
  	this.body.mobile_no=m
  	this.body.email=e
  	this.body.username=u;
  	  	this.dataService.addUserInDb(this.body).subscribe((res)=>{
    		console.log(res);
    		this.userObject.id=res["id"];
    		this.userObject.mobile_no=res["mobile_no"];
    		this.userObject.email=res["email"];
    		this.router.navigate(['/movies'])
  		 });
  }

}
