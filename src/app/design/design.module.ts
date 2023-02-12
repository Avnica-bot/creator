import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CircleComponent } from './circle/circle.component';
import { DesignRoutingModule } from './design-routing.module';
import { GlowCircleComponent } from './glow-circle/glow-circle.component';
import { NoScrollComponent } from './no-scroll/no-scroll.component';
import { TimelineComponent } from './timeline/timeline.component';


@NgModule({
  declarations: [
    NoScrollComponent,
    GlowCircleComponent,
    TimelineComponent,
    CircleComponent
  ],
  imports: [
    CommonModule,
    DesignRoutingModule
  ]
})
export class DesignModule { }
