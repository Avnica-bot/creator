import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  template: `
    <div class="shape-container">
      <div class="box">
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
  `,
  styleUrls: ["./circle.component.css"]
})
export class CircleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
