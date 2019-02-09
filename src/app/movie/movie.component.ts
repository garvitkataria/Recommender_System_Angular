import { Component, OnInit,ViewChild, AfterViewInit  } from '@angular/core';
import {DataService} from '../data.service';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{
	movie:movie
	movies:movie [];
	totalRated=0;
  user_id = "";
	body=
		{
		    "user": "",
		    "movie": "",
		    "rating": ""
		}
    user:user;
  constructor(private dataService:DataService) { }

 	ngOnInit() {
  		this.dataService.getMovies().subscribe((movies:movie [])=>{
    	this.movies=movies;
    	console.log("here",this.movies);
    	console.log("here",this.movies[2]);
    	});

  		this.dataService.getUsers().subscribe((res: user[])=>{
    	this.user=(res[res.length - 1]);
    	});
  	}
  	Rate(id,val)
  	{
  		this.body.user = "http://127.0.0.1:8000/user/"+this.user.id+"/";
  		this.body.movie = "http://127.0.0.1:8000/movies/"+id+'/';
  		this.body.rating = val;
  		// console.log("body",this.body);

  		// To post the movie rated in the backend
  		this.dataService.postRating(this.body).subscribe((res)=>{
    	console.log(res);
  		 });

  		//To maintain total movies rated
  		this.totalRated=this.totalRated+1
  		console.log(id," ",val);
  		for (var i = this.movies.length - 1; i >= 0; i--) {
  			if(this.movies[i].id==id)
  			{
  				this.movies[i].rate=val
  			}

  		}
  		for (var i = this.movies.length - 1; i >= 0; i--) {
  			if(this.movies[i].rate)
  			{
				console.log(this.movies[i].title)
				console.log(this.movies[i].rate)
  			}
  			
  		}
  	}
}
interface movie
{
        "id":string,
        "url": string,
        "title": string,
        "yearOfRelease": string,
        "movieImage": string,
        "imdbId": string,
        "created_on": string,
        "about":string,
        "rate":"0"
}
interface user
{
    "email": ""
    "id": ""
    "mobile_no": ""
    "password": ""
    "recomended": ""
    "url": ""
    "username": ""
}