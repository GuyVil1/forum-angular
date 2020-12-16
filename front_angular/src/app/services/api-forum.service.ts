import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginForm, RegisterForm } from '../models/forms.model';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Discussion } from '../models/discussion.model';
import { SessionService } from './session.service';


@Injectable({
  providedIn: 'root'
})
export class ApiForumService {

        currentUser : User

        private url : string = "http://localhost:8000/"

  constructor(
    private _httpClient: HttpClient,
    private sessionService: SessionService
  ) {}

  register(newUser : RegisterForm){
    this._httpClient.post(this.url + 'users/create', newUser).subscribe({
      next : () => console.log("Register Ok"),
      error : (error) => console.log(error)     
      
    })
    console.log(newUser);

  }


  login(loginInfo : LoginForm){
    console.log(loginInfo);  
    // this._httpClient.post(this.url+ 'users/login', loginInfo).subscribe({
      
    //     next:(userApi) => {
    //     this.currentUser = userApi["User"]
    //     this.currentUser.token = userApi["token"]        
    //     sessionStorage.setItem("token", this.currentUser.token)      
    //     console.log(this.currentUser)
               
    //     },
    //     error : (error)=> console.log(error)
        
    // })
    this._httpClient.post<User>(this.url+ 'users/login', loginInfo)
      .pipe(
        catchError(err => {console.log(err); return err;})
      )
      .subscribe((data: User) => {
        this.sessionService.login(data);
      })

  }


  getDiscussion() : Observable<Discussion[]>{
    
    return this._httpClient.get<Discussion[]>(`${this.url}discussions`).pipe(map(ds => ds.map(d => ({...d, username: d.User?.username}))))
    //return this._httpClient.get<Discussion[]>(this.url + '/discussion')
    // let myheader = new HttpHeaders({
    //   'Content-Type':'application/json',      
    // })
    // console.log(this._httpClient.get<Discussion[]>(this.url + 'discussions')        
  }


  // disconnect(){

  // }

  getUserById(userId : number): Observable<User>{

    return this._httpClient.get<User>(this.url + 'users/' + userId)

  }

  postDiscussion(discussion : Discussion){

    this._httpClient.post(this.url + 'discussions/create', discussion).subscribe({
      next : () => console.log(discussion),    
      error : (error) => console.log(error)           
      
    })
    
    

  }




}
