import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
// This works ✅
// BUT:constructor should mainly be for dependency injection
// not business logic.

// export class Profile {
//   constructor(private route: ActivatedRoute) {
//     this.route.queryParams.subscribe((params) => {
//       console.log(params);
//     });
//   }
// }

// Better Angular Practice 😎
export class Profile {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
    });
  }

}