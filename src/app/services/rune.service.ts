import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class RuneService {

    baseUrl = 'http://localhost:8082';

    constructor(private http: HttpClient) { }

    getAllRuneType(): Observable<any> {
        return this.http.get(this.baseUrl + '/rune/getAllRuneType')
    }

    getAllRunPropertyType(): Observable<any> {
        return this.http.get(this.baseUrl + '/rune/getAllRunPropertyType')
    }

    getAllMonster(): Observable<any> {
        return this.http.get(this.baseUrl + '/rune/getAllMonster')
    }

    saveRune(info): Observable<any> {
        return this.http.post(this.baseUrl + '/rune/save', info);
    }

    filterRunes(info): Observable<any> {
        return this.http.post(this.baseUrl + '/rune/filterRunes', info);
    }

}