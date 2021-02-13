import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatMenuTrigger} from '@angular/material/menu';


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
