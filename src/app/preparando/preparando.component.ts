import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preparando',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './preparando.component.html',
  styleUrl: './preparando.component.css'
})
export class PreparandoComponent {

  constructor (private router: Router){}

  finalizados() {

    this.router.navigate(['/finalizados']);
  }

}
