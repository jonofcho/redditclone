import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(private http:HttpClient) { }

  public getListings(target:string = '', params?):Observable<any>{
    params = params || '';
    return this.http.get(environment.apiOrigin + target + '.json' + '?limit=10' + params)
  }

  public getListingDetails(target:string):Observable<any>{
    return this.http.get(environment.apiOrigin + target +'.json' )
  }

}
