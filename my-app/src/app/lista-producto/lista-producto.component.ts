import { Component, OnInit } from '@angular/core';
import { ICliente } from '../interfaces/cliente';
import { IProducto } from '../interfaces/producto';
import { IPedido } from '../interfaces/IPedido';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit{

  productoNuevo: IProducto  = {
    id: 0,
    nombre: '',
    precio: 0,
    imagen: ''
  }


  productos: IProducto[] = [
    {
      id:1,
      nombre: 'televisor led',
      precio: 999,
      imagen:'https://www.shutterstock.com/image-photo/4k-monitor-isolated-on-white-260nw-580917556.jpg'
    },

    {
      id:2,
      nombre: 'tenis nike',
      precio: 999,
      imagen:'https://i.zst.com.br/thumbs/12/1/14/1538521203.jpg'
    },

    {
      id:3,
      nombre: 'audifonos messi',
      precio: 999,
      imagen:'https://images.pcel.com/1600/Accesorios-Audifonos-y-Microfonos-CYA-94000-514c9649056f4.jpg'
    }


  ]
  ngOnInit(): void {
    
  }

  agregarProducto(){
    this.productos.push(this.productoNuevo)
    this.productoNuevo = {
      id: 0,
    nombre: '',
    precio: 0,
    imagen: ''
    }
  }

}
