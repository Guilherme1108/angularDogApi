import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  breedInput: string = '';

  constructor(private router: Router) {}
  onEnter(event: any) {
    if (!this.breedInput.trim()) return;
    this.router.navigate(['dogs', this.breedInput]);
  }
}
