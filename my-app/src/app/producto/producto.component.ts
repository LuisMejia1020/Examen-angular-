import { Component, Input } from '@angular/core';
import { IPedido } from '../interfaces/IPedido';
import { IProducto } from '../interfaces/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  @Input()productos?: IProducto
  @Input()pedidos?: IPedido

}
