import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {


  @Output() selected = new  EventEmitter<string>();


  time: string = "";

  constructor() { }

  ngOnInit(): void {
    this.changeTime();
    setInterval(() => this.changeTime(), 1000);
  }

  changeTime() {
    this.time = (new Intl.DateTimeFormat("en-us", {timeStyle: 'medium'})).format(Date.now());
    // console.log(this.time);
  }


  clicked() {
    this.selected.emit("Navigating");
  }
}
