import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircleComponent } from './circle/circle.component';
import { GlowCircleComponent } from './glow-circle/glow-circle.component';
import { DesignGuard } from './guards/design.guard';
import { NoScrollComponent } from './no-scroll/no-scroll.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  {
    path: "", canActivateChild: [DesignGuard], canLoad: [DesignGuard], component: NoScrollComponent, children: [
      { path: "shape", component: CircleComponent },
      { path: "glowing-circle", component: GlowCircleComponent },
      { path: "timeline",  component: TimelineComponent, },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignRoutingModule { }
