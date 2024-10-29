import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-preparar',
  imports: [RouterModule, CommonModule],
  templateUrl: './preparar.component.html',
  styleUrl: './preparar.component.css'
})
export class PrepararComponent {

  constructor( private router: Router){}

  preparando() {

    this.router.navigate(['/preparando']);
  }

}
