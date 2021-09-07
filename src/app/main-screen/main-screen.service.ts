import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainScreenService {

  constructor(private httpClient: HttpClient) { }

  getProjectList<T>(): Observable<T[]> {
    return this.httpClient.get<T[]>("/assets/configs/portfolio.json");
  }

  getBlogList<T>(): Observable<T[]> {
    return this.httpClient.get<T[]>("/assets/configs/blogs.json");
  }
}
