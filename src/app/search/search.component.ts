import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'creator-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  num = 5;

  constructor() { }

  ngOnInit(): void {
  }

}
