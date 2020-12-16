import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Discussion } from 'src/app/models/discussion.model';
import { ApiForumService } from 'src/app/services/api-forum.service';

@Component({
  selector: 'app-newsubject',
  templateUrl: './newsubject.component.html',
  styleUrls: ['./newsubject.component.scss']
})
export class NewsubjectComponent implements OnInit {

  fg : FormGroup

  constructor(
    private _builder : FormBuilder,
    private _apiforum : ApiForumService
  ) { }

  ngOnInit(): void {
    this.fg = this._builder.group({
      title:['', Validators.required],
      subject:['', Validators.required]
    })
  }


  onSubmit(){
    const discussioninfo = new Discussion()
    const formValues = this.fg.value
    discussioninfo.title = formValues['title']
    discussioninfo.subject = formValues['subject']

    this._apiforum.postDiscussion(discussioninfo)

  }

}
