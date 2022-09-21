import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  courses:Course[] |any;
  private apiGetAll:string = 'http://localhost:8086/api/v1.0/lms/courses/getall';
  private apiGetByTechnology = 'http://localhost:8086/api/v1.0/lms/courses/info';

  getAllCourses():Observable<Array<Course>>{
    return this.http.get<Array<Course>>(this.apiGetAll);
  }
  getCourseByTechnology(technology: string):Observable<Array<Course>>{
    return this.http.get<Array<Course>>(`${this.apiGetByTechnology}/${technology}`);
  }
}
