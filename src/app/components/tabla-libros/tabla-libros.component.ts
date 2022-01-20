import { Component, Input } from '@angular/core';
import Libro from 'src/interfaces/Libro';

@Component({
  selector: 'app-tabla-libros',
  templateUrl: './tabla-libros.component.html',
  styleUrls: ['./tabla-libros.component.css'],
})
export class TablaLibrosComponent {
  @Input() libros: Libro[] = [];

  constructor() {}
}
