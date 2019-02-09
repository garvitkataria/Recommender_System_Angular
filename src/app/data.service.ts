import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;

@Injectable({
  providedIn: 'root'
})
export class DataService {
   server="http://35.200.250.64:8007/"
  constructor(public http:HttpClient)
   {
   	console.log('DataService is running ...');
   }

   getMovies()
   {
   		return this.http.get(this.server+'movies/');
   }

   addUserInDb(body)
   {
   		return this.http.post(this.server+'user/',body);
   }

   postRating(body)
   {
   		return this.http.post(this.server+'rating/',body);
   }
   getUsers()
   {
   		return this.http.get(this.server+'user/');
   }
   
   getRecommendation(body)
   {
   		return this.http.get(this.server+'rating/recommend/?user_id='+body);
   }
   getRecommendation2(body)
   {
         return this.http.get(this.server+'rating/recommend2/?user_id='+body);
   }
   getRecommendation3(body)
   {
         return this.http.get(this.server+'rating/recommend3/?user_id='+body);
   }
}
