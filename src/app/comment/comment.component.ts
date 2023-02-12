import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, pluck } from 'rxjs';
import { CommentService } from './comment.service';

@Component({
  selector: 'creator-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {


  comments$ = this.activatedRoute.data.pipe(pluck('comments'));

  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.activatedRoute.data.subscribe(data => console.log(data));
  }

}
