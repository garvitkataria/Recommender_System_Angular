import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
	movie:movie;
	movies:movie [];

	rec_m:string[];
	final_rec_movie:movie []=[];
	
	rec_m2:string[];
	final_rec_movie2:movie []=[];

   user:user;

   user_id="1"
   recommender_system="Item Item Collaborative Filtering"
  constructor(private dataService:DataService) { }

  	ngOnInit() 
  	{
  		this.dataService.getUsers().subscribe((res: user[])=>{
    	this.user=(res[res.length - 1]);
    	this.user_id=this.user.id
    	console.log("user_id",this.user_id)
		    	this.dataService.getRecommendation(this.user_id).subscribe((rec_movies:string[])=>{
			  		this.rec_m=rec_movies;
			    	console.log(this.rec_m);
			    	for (var i = this.rec_m.length - 1; i >= 0; i--) {
			    		for (var j = this.movies.length - 1; j >= 0; j--) {
			    			if(this.rec_m[i]==this.movies[j].id)
			    			{
			    				// console.log(this.movies[j].id)
			    				this.final_rec_movie.push(this.movies[j])
			    				// console.log(this.final_rec_movie.length)
			    			}	    			
			    		}
			    	}
		    	});
    	});

  		this.dataService.getMovies().subscribe((movies:movie [])=>{
    	this.movies=movies;
    	console.log("movies",this.movies);
    	});

  		
  	}
  	UserUserCollaborativeFiltering()
  	{
  		this.recommender_system = "User-User Collaborative Filtering"
  		console.log("user")
  		console.log(this.user_id)
  		this.final_rec_movie=[]
  		this.dataService.getRecommendation2(this.user_id).subscribe((rec_movies:string[])=>{
	  		this.rec_m=rec_movies;
	    	console.log(this.rec_m);
	    	for (var i = this.rec_m.length - 1; i >= 0; i--) {
	    		for (var j = this.movies.length - 1; j >= 0; j--) {
	    			if(this.rec_m[i]==this.movies[j].id)
	    			{
	    				this.final_rec_movie.push(this.movies[j])
	    			}	    			
	    		}
	    	}
    	});
  	}

  	ItemItemCollaborativeFiltering()
  	{
  		this.recommender_system = "Item-Item Collaborative Filtering"
  		console.log("Item")
  		console.log(this.user_id)
  		this.final_rec_movie=[]
  		this.dataService.getRecommendation(this.user_id).subscribe((rec_movies:string[])=>{
	  		this.rec_m=rec_movies;
	    	console.log(this.rec_m);
	    	for (var i = this.rec_m.length - 1; i >= 0; i--) {
	    		for (var j = this.movies.length - 1; j >= 0; j--) {
	    			if(this.rec_m[i]==this.movies[j].id)
	    			{
	    				// console.log(this.movies[j].id)
	    				this.final_rec_movie.push(this.movies[j])
	    				// console.log(this.final_rec_movie.length)
	    			}	    			
	    		}
	    	}
    	});
  	}

  	SVD()
  	{
  		this.recommender_system = "Singular Value Decomposition(SVD)"
  		console.log("SVD")
  		console.log(this.user_id)
  		this.final_rec_movie=[]
  		this.dataService.getRecommendation3(this.user_id).subscribe((rec_movies:string[])=>{
	  		this.rec_m=rec_movies;
	    	console.log(this.rec_m);
	    	for (var i = this.rec_m.length - 1; i >= 0; i--) {
	    		for (var j = this.movies.length - 1; j >= 0; j--) {
	    			if(this.rec_m[i]==this.movies[j].id)
	    			{
	    				this.final_rec_movie.push(this.movies[j])
	    			}	    			
	    		}
	    	}
    	});
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