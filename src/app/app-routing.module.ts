import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { v4 } from "uuid";
import { MdEditorComponent } from './md-editor/md-editor.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TimelineComponent } from './timeline/timeline.component';
const routes: Routes = [
  { path: "", component: NavigationComponent },
  { path: "timeline",  component: TimelineComponent },
  { path: "marked-down-editor", redirectTo: `marked-down-editor/${v4()}`},
  { path: "marked-down-editor/:id", component: MdEditorComponent },
];

@NgModule({
  // declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
