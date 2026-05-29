import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-registration',
  imports: [FormsModule, JsonPipe],
  standalone: true,
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
  user={
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
    age:'',
    phone:'',
    country:'',
    terms:false
  };

  onSubmit(userData:any){
    console.log(userData);
  }

  onReset(registrationForm:any){
    registrationForm.reset();
  }
}
