import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Libro from 'src/interfaces/Libro';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  searchLibros(parametro: string): Observable<Libro[]> {
    return this._http.get<Libro[]>(`/api/Libro/search/${parametro}`);
  }
}
