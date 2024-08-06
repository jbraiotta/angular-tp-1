import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <main class="main">
  <div class="content">
      <h1>Hola {{ nombrePersona || 'Anonimo' }}</h1>
      <br>
      <p>Ingrese nombre de la persona:</p>
      <hr>
      <input
      [(ngModel)]="nombrePersona"
      type="text"
      placeholder="Escribe el nombre" />
    </div>
</main>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombrePersona: string = '';
}
