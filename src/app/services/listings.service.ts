import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(private http:HttpClient) { }

  public getListings(target:string = ''){
    return this.http.get(environment.apiOrigin + target + '.json')
  }
}
