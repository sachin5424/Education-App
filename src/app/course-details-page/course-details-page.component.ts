import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-details-page',
  templateUrl: './course-details-page.component.html',
  styleUrls: ['./course-details-page.component.css']
})
export class CourseDetailsPageComponent implements OnInit {
 
  constructor() { }
  container_fluid_bg_img='assets/feauter/real-life-projects.jpg';
  ngOnInit(): void {
  }
  panelOpenState = false;

}
