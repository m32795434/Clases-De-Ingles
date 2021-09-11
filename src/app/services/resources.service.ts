import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(
    private http: HttpClient
  ) { }
  //relative URL path/resource.
  fetchUrl = '/assets/resources.json';
  getResources () {
    
     return this.http.get<any>(this.fetchUrl);
   }
}
