import { Component, signal } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Employee-Registration-Portal');

  // employeeForm = new FormGroup({

  //   name: new FormControl('',[Validators.required, Validators.minLength(3)]),
  //   email: new FormControl('',[Validators.required, Validators.email]),
  //   age: new FormControl('',[Validators.required, Validators.min(18), Validators.max(65)]),
  //   department: new FormControl('',[Validators.required]),

  //   address: new FormGroup({
  //     street: new FormControl('',[Validators.required]),
  //     city: new FormControl('',[Validators.required]),
  //     state: new FormControl('',[Validators.required]),
  //     zip: new FormControl('',[Validators.required, Validators.pattern('^[0-9]{5}$')])
  //   })

  // });

  //using form builder: Everything is same just it removes the boilerplate code and makes it more concise and readable. 
  employeeForm: FormGroup;
  constructor(private fb: FormBuilder){
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)],this.startsWithA],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(65)]],
      department: ['', [Validators.required]],

      //nested form group for address
      address: this.fb.group({
        street: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        zip: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]]
      }),

      //dynamic form array
      skills: this.fb.array([
        this.fb.control('', Validators.required)
      ])

  })
}

startsWithA(control: AbstractControl){
  if(control.value && control.value.length > 0 && control.value.startsWith('A')){
    return null; 
  }
  return { startsWithA: true }; 
}

get skills() {
  console.log(this.employeeForm.get('skills') as FormArray);
  return this.employeeForm.get('skills') as FormArray;
}
addSkill() {
  this.skills.push(this.fb.control('', Validators.required));
}
removeSkill(index: number) {
  this.skills.removeAt(index);
}

  onSubmit(){
  console.log(this.employeeForm.value);
}

}

