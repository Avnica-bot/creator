import { HttpEventType } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { InitService } from './init.service';
import { localStorageToken } from './localstorage.token';
import { Posts } from './models/posts';
import { PostsService } from './posts.service';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = "App Component";
  
  // posts$ = this.postService.getPosts$;

  name = "";

  // roomCount$ = this.postService.getPosts$.pipe(map(posts => posts.length));

  getValue(value:string) {
    console.log(value);
  }

  totalBytes = 0;

  constructor(
    // private postService: PostsService,
    private initService: InitService,
    private config: ConfigService,
    private router: Router
    // @Inject(localStorageToken) private localStorage: Storage
  ) {

    console.log(initService.config);
  }

  

  ngOnInit(): void {

 // this.router.events.subscribe((event) => {
    //   console.log(event);
    // })

    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe
      (event => console.log("Navigation Started",event));
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe
      (event => console.log("Navigation End",event));
    // this.localStorage.setItem("name", "Hilton Hotel")
    /* this.postService.getPhotos().subscribe(events => {
      switch (events.type) {
        case HttpEventType.Sent:{
          console.log("Request Has been sent");
          break;
        }
          
        case HttpEventType.ResponseHeader: {
          console.log("Request Success");
          break;
        }
          
        case HttpEventType.DownloadProgress: {
          this.totalBytes += events.loaded;
          break;
        }
          
        case HttpEventType.Response: {
          console.log("Request Completed", events.body);
          break;
          }

      }
    }) */
    // console.log(this.postService.getPosts());
    // this.postService.getPosts().subscribe(posts => {
    //   this.posts = posts;
    //   console.log(this.posts);
    // })

   

  }
}
