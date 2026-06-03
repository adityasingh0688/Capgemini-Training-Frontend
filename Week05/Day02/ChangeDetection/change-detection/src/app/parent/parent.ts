import {  Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  counter=0;
  user = {
    name: 'John Doe',
    age: 30,
  };
  changeName() {
    this.user.name = 'Jane Doe';
  }
  // changeName(){
  //   this.user = {
  //     ...this.user,
  //     name: 'Aditya'
  //   };
  // }

  incrementCoutner(){
    this.counter++;
  }
}














// OnPush Concept;

// Angular does not check the component unless one of these happens:

// 1. @Input changes
// 2. Event occurs inside component
// 3. Signal changes
// 4. Observable emits

// Then Angular checks that component.

// changeName() {
//   this.user.name = 'Jane Doe';
// }

// and

// incrementCounter() {
//   this.counter++;
// }

// When you click Increment Counter, Angular gets a reason to check the child again because:

// <app-child
//   [employee]="user"
//   [counter]="counter">
// </app-child>

// counter changed.

// Then Angular reevaluates:

// <p>Name: {{employee.name}}</p>
// <p>Age: {{employee.age}}</p>
// <p>Counter: {{counter}}</p>

// all together.

// So after clicking Counter, you might suddenly see:

// Name: Jane Doe

// even though changing user.name alone didn't trigger an update.