import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = "https://free-nba.p.rapidapi.com/teams"

  // secondUrl=
  thirdUrl="https://rapidapi.com/theapiguy/api/free-nba"

   httpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key':'2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    })
  };

  

  constructor(private http:HttpClient) { 
  }

  get(){
    return this.http.get(this.url,this.httpOptions)
  }

  getDetail(id: any){
    let url = `https://free-nba.p.rapidapi.com/games?page=0&dates[]=2022-12-06&dates[]=2022-12-05&dates[]=2022-12-04&per_page=12&team_ids[]=${id}`
    return this.http.get(url,this.httpOptions)
  }

  getmethod(){
    return this.http.get(this.thirdUrl,this.httpOptions)
  }
}
