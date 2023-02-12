import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glow-circle',
  template: `
    <div class="container">
      <div class="loader"><span></span></div>
      <div class="loader"><span></span></div>
      <div class="loader"><i></i></div>
      <div class="loader"><i></i></div>
    </div>
  `,
  styleUrls: ['./glow-circle.component.css']
})
export class GlowCircleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
