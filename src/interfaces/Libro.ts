export default interface Libro {
  id: number;
  titulo: string;
  anio: string;
  genero: string;
  numPaginas: number;
  autor: Autor;
}

interface Autor {
  id: number;
  nombre: string;
  fechaNacimiento: Date;
  ciudad: string;
  email: string;
}
