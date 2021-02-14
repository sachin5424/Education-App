import { Component, OnInit } from '@angular/core';
import { Course } from './course'
import { ActivatedRoute,ParamMap } from '@angular/router'
@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {
  data= new Course
  _id:any = 1 
  categories:any[]=this.data.categories
  courses:any[]=this.data.courses
  demo:any
  constructor(private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
    
    this.courses.filter(res=>{
      console.log(res);
      
    })
  

    
    
  }
  filtervalue(id:any){
    
    
    this.courses =  this.courses.filter(res=>{
      return res
     
      
     
      
    })  

  }

}
