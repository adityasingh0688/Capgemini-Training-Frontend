import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-abpout',
  imports: [],
  templateUrl: './abpout.html',
  styleUrl: './abpout.css',
})
export class Abpout {
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params);
    });
  }
}
