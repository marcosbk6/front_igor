import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-finalizados',
  imports: [RouterModule, CommonModule],
  templateUrl: './finalizados.component.html',
  styleUrl: './finalizados.component.css'
})
export class FinalizadosComponent {

  constructor (private router: Router){}

  retirar() {

    this.router.navigate(['/notificando-moto']);
  }

}
