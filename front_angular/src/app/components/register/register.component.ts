import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterForm } from 'src/app/models/forms.model';
import { ApiForumService } from 'src/app/services/api-forum.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  fg : FormGroup

  constructor(
    private _builder : FormBuilder,
    private _authService : ApiForumService
  ) { }

  ngOnInit(): void {
    this.fg = this._builder.group({

      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordCheck: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      checked : ['', Validators.required],

    })
  }

  onSubmit(){
    const newUser = new RegisterForm()
    const formValues = this.fg.value
    if(formValues["password"] === formValues["passwordCheck"]){

      newUser.username = formValues['username']
      newUser.email = formValues['email']    
      newUser.password = formValues['password']
      newUser.firstname = formValues['firstname']
      newUser.lastname = formValues['lastname']
      this._authService.register(newUser)

    }
    else{
      alert("T'es une merde, recommence sérieusement, concentre toi !!! si tu es pas capable demande à ta mère")
      
      
    }
    

    
  }

}
