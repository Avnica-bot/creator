import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'creator-notfound',
  template: `
    <div>
      <h1>The resource you are looking for doesn't exists</h1>
    </div>
  `,
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
