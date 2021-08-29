

export class Producto{
  constructor(
    public codigo: string,
    public descripcion: string,
    public fechaCaducidad: Date,
    public proveedor?: string,
    public _id?: string

  ) {}
}
