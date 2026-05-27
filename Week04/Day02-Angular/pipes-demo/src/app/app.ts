import { Component, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  name:WritableSignal<string> = signal("angular pipes demo");

  cities:string[] = ["delhi","mumbai","bangalore","pune"];

  employee = {
    id:101,
    name:"Aditya",
    department:"IT",
    salary:50000
  };

  currentDate:Date = new Date();

  price:number = 1234.5678;

  discount:number = 0.25;

  message:string = "Welcome To Angular Pipes";
}