import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Employee-Dashboard');

  employeeName = signal('Aditya');
  salary=signal(26900);
  status=signal('Active');

  bonousSalary=computed(() => this.salary() * 0.1);

  constructor() {
    effect(() => {
      console.log(`Employee Name: ${this.employeeName()}, Salary: ${this.salary()}, Status: ${this.status()}, Bonus Salary: ${this.bonousSalary()}`);
    });
  }

  increaseSalary() {
    this.salary.update(salary => salary + 1000);
  }

  changeStatus() {
    this.status.set(this.status() === 'Active' ? 'Inactive' : 'Active');
  }

  resetSalary() {
    this.salary.set(26900);
  }
}
