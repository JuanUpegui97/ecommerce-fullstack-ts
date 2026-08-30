export interface TiposProductos {
    id: number;
    categoria_id: number;
    nombre: string;
    categoria_nombre:string;
}

export interface TipoProductoCrear {
    categoria_id:number;
    nombre:string;
}