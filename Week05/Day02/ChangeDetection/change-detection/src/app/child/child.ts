import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

  @Input() employee!: {name: string, age: number}; 
  @Input() counter!: number;
  
  counterValue = 100;
}
