import { HttpClient, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { AppConfig } from './AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { Posts } from './models/posts';

/**
 * Credentials Avnica aYacVZAL2LzHVs35
 */
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Posts[] = [];

  getPosts$ = this.http.get<Posts[]>("https://jsonplaceholder.typicode.com/posts").pipe(
    shareReplay(1)
  );

  getPosts() {
    return this.http.get<Posts[]>("https://jsonplaceholder.typicode.com/posts");
  }

  getPhotos() {
    const request = new HttpRequest("GET", "https://jsonplaceholder.typicode.com/albums/1/photos", {
      reportProgress: true
    });

    return this.http.request(request);
  }

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig, private http: HttpClient) {
    console.log("Mongo Service instantiated");
  }
}
