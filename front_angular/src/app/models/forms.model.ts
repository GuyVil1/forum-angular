import { Message } from "@angular/compiler/src/i18n/i18n_ast";

export class RegisterForm{    
   
    username: string;
    email: string;
    password: string;
    firstname : string;
    lastname : string;    
    

}


export class LoginForm{
    email : string;
    password : string;
}

export class UpdateForm{

    username: string;
    email: string;
    password: string;
    firstname : string;
    lastname : string; 
}

export class DiscussionForm{

    title : string
    subject: string
    content : Message;
    

    
}



