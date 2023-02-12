import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { LayoutModule } from '@angular/cdk/layout';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { AppNavComponent } from './app-nav/app-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoverDirective } from './hover.directive';
import { InitService } from './init.service';
import { LoginComponent } from './login/login.component';
import { MdEditorComponent } from './md-editor/md-editor.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RequestInterceptor } from './request.interceptor';
import { SearchModule } from './search/search.module';
import { GlobalErrorHandler } from './errorhandler.service';


function initFactory(initService: InitService) {
  return () => initService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MdEditorComponent,
    AppNavComponent,
    NotfoundComponent,
    LoginComponent,
    HoverDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    SearchModule
  ],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService], 
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
