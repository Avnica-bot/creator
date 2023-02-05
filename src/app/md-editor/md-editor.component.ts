import { AfterViewInit, Component, ElementRef, OnInit, SecurityContext, ViewChild } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { marked } from 'marked';
import { MonogoService } from '../monogo.service';

@Component({
  selector: 'app-md-editor',
  templateUrl: './md-editor.component.html',
  styleUrls: ['./md-editor.component.css'],
})
export class MdEditorComponent  implements OnInit, AfterViewInit  {

  @ViewChild("editor") editor?: ElementRef<HTMLTextAreaElement>;

  parsedMarkedDown:string | null = "";
  name: string = "";
  
  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute, private mongoService: MonogoService) { }
  ngAfterViewInit(): void {
    if (this.editor?.nativeElement)
      this.editor?.nativeElement.focus();
  }

  getText(ev: Event) {
    const parsedMarkedDown = marked.parse((ev.target as HTMLTextAreaElement).value);
    this.parsedMarkedDown = this.sanitizer.sanitize(SecurityContext.NONE, parsedMarkedDown);
    console.log(this.parsedMarkedDown);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.name = params['id']);

    this.mongoService.createFile(this.name);
  }

}
