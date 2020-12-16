import { Component, OnInit } from '@angular/core';
import { Discussion } from 'src/app/models/discussion.model';
import { ApiForumService } from 'src/app/services/api-forum.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  //isConnected;
  listDiscussion : Discussion[]

  constructor(
    //private sessionService: SessionService,
    private _service : ApiForumService
    ) { }

  ngOnInit(): void {
    //this.sessionService.subscribe(user => this.isConnected = user != null);
    this._service.getDiscussion().subscribe(
    (listfromapi : Discussion[]) => {
      console.log(listfromapi);
      this.listDiscussion = listfromapi,       
      (error) => console.log(error)
    } 
    
     
    )
    
  }

  

}
