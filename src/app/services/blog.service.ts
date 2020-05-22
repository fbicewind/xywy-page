import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class BlogService {

    constructor(private http: HttpClient) { }

    getIndexInfo(): Observable<any> {
        return this.http.get('http://localhost:8080/blog/index')
    }

    getRightInfo(): Observable<any> {
        return this.http.get('http://localhost:8080/blog/right')
    }

    getRecommendBlogs(): Observable<any> {
        return this.http.get('http://localhost:8080/blog/recommendBlogs')
    }

    getBlogsByType(type: string, tagId: number, pageNum: number, pageSize: number): Observable<any> {
        return this.http.get('http://localhost:8080/blog/list/' + type + '?tagId=' + tagId + '&pageNum=' + pageNum + '&pageSize=' + pageSize);
    }

    getBlogById(id: number): Observable<any> {
        return this.http.get('http://localhost:8080/blog/detail/' + id);
    }
}