import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators, AbstractControl} from '@angular/forms'
import { passwordMatch } from 'src/Validators/passwordMatch';
@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent{
  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
emailRejex=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
signup = new FormGroup({
username : new FormControl('',[Validators.required,Validators.maxLength(8)]),
 email : new FormControl('',[Validators.required,Validators.pattern(this.emailRejex)]),
 password : new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(32),Validators.pattern(this.passwordPattern)]),
 confirmpassword : new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(32)]),
},[passwordMatch("password","confirmpassword")])
getcontrol(name:any):AbstractControl | null{
  return(this.signup.get(name))
}
  
signupfn(){
  if (this.signup.valid) {
    console.log(this.signup.value);
    this.signup.reset();
}
}


}