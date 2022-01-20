import { Component, OnInit } from '@angular/core';
import Libro from 'src/interfaces/Libro';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  libros: Libro[] = [];
  parametro: string = '';
  error: string = '';
  constructor(private _api: ApiService) {}

  ngOnInit(): void {}

  buscarLibros() {
    if (this.parametro.length > 2) {
      this.libros = [];
      this._api.searchLibros(this.parametro).subscribe((data: Libro[]) => {
        if (data.length == 0) this.error = 'No se encontró ningun resultado';
        else {
          this.libros = data;
          this.error = '';
        }
      });
    } else {
      this.libros = [];
      this.error = '';
    }
  }
}
