import { Component, Inject, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { PostsService } from '../../posts.service';


@Component({
  selector: 'app-no-scroll',
  template: `
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./no-scroll.component.css']
})
export class NoScrollComponent implements OnInit {

  constructor(private mongoService: PostsService, private configService: ConfigService, @Inject(APP_SERVICE_CONFIG) private config: AppConfig) { }

  ngOnInit(): void {
    console.log(this.config.endpoint);
  }


}
