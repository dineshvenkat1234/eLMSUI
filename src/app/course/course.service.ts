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
  private apiGetAll:string = 'https://rgcxiskqsd.execute-api.ap-northeast-1.amazonaws.com/elmsdemo/course';
  private apiGetByTechnology:string = 'https://rgcxiskqsd.execute-api.ap-northeast-1.amazonaws.com/elmsdemo/course';

  getAllCourses():Observable<Array<Course>>{
    return this.http.get<Array<Course>>(this.apiGetAll);
  }
  getCourseByTechnology(technology: string):Observable<Array<Course>>{
    return this.http.get<Array<Course>>(`${this.apiGetByTechnology}/${technology}`);
  }
}
