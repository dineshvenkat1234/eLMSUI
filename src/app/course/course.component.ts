import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Course } from './course';
import { CourseService } from './course.service';

const ELEMENT_DATA: Course[] =[];
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.viewAllCourses();
  }

  courseArr:Array<Course>=[];
  gridArr:Array<Course>=[];
  technology:string | any;
  

  viewAllCourses(){
    this.courseService.getAllCourses().subscribe(
      data=>{
        console.log(Object.values(data));
        this.courseArr=Object.values(data);
        this.gridArr=this.courseArr;
      },
      error=>{
        console.log(error);
      }
    )
  }

  getCoursesByTechnology(){
    this.courseService.getCourseByTechnology(this.technology).subscribe(
      data=>{
        console.log(Object.values(data));
        this.gridArr=[];
        this.gridArr=Object.values(data);
      }
    )
  }
}
