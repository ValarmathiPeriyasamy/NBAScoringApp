import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  details:any=[];
  selectedLevel="Atlanta Hawks";
  filterarry= {}
  params={};
  teamsDetail:any=[];
  imagepath:any;

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.get()
  }

  get(){
    this.service.get().subscribe((x:any)=>{
      console.log(x,'hiii')
      this.details = x.data;
      console.log(this.details.data , 'hiiii')
    })
   }

    onclick(value:any){
    this.details.forEach((x:any) => {
       if(value == x.full_name){
         this.filterarry= x.id;
       }
     });

     this.service.getDetail(this.filterarry).subscribe((x:any)=>{
        console.log(x,'khgjg')
        this.teamsDetail.push( x.data[0])
        let imagepath = this.teamsDetail[this.teamsDetail.length - 1].home_team.abbreviation

        console.log(this.teamsDetail,'kkkk');
        this.imagepath = `https://interstate21.com/nba-logos/${imagepath}.png`
        this.teamsDetail[this.teamsDetail.length - 1]['img']=this.imagepath;
     })

   console.log(this.filterarry,'hkbjhb')

    }

    remove(data:any){
      this.teamsDetail.pop(data);

    }

}
