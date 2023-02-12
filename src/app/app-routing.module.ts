import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { v4 } from 'uuid';
import { LoginComponent } from './login/login.component';
import { MdEditorComponent } from './md-editor/md-editor.component';

import { LoginGuard } from './guards/login.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'design',
    loadChildren: () =>
      import('./design/design.module').then((m) => m.DesignModule),
  },
  {
    path: 'marked-down-editor',
    redirectTo: `marked-down-editor/${v4()}`,
    pathMatch: 'full',
  },
  { path: 'marked-down-editor/:id',     canActivate: [LoginGuard], component: MdEditorComponent },
  {
    path: 'booking',
    loadChildren: () =>
      import('./booking/booking.module').then((m) => m.BookingModule),
  },
  { path: 'search', component: SearchComponent},
  { path: 'comments', loadChildren: () => import('./comment/comment.module').then(m => m.CommentModule) },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  // declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
