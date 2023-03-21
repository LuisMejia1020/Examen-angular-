import { Component, OnInit } from '@angular/core';
import { ICliente } from '../interfaces/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{

  clienteNuevo: ICliente = {
    id: 0,
    nombre: '',
    correo: '',
    telefono: '',
    direccion:''
  }

  
  clientes: ICliente[] = [
    {
      id:1,
      nombre: 'Luis Fernando Mejia Castro',
      correo:'luisrvp5@gmail.com',
      telefono:'+504 32897767',
      direccion:'Residencial Villas las hadas casa #11'
     
    },

    {
      id:2,
      nombre: 'Jose David Mejia Castro',
      correo:'josechavito2340',
      telefono:'+504 33674829',
      direccion:'Residencial Villas las hadas casa #11'
     
    },

    {
      id:3,
      nombre: 'Jani Graciela FLores Lama',
      correo:'JaniRoyale@gmail.com',
      telefono:'+504 97482219',
      direccion:'km 4 santa lucia'
     
    },

    {
      id:4,
      nombre: 'Helton Jair Lopez',
      correo:'Heltonthegreat@gmail.com',
      telefono:'+504 33787231',
      direccion:'El prado'
     
    },
  
  ]

  ngOnInit(): void {
    
  }

  agregarCliente(){
    this.clientes.push(this.clienteNuevo)
    
    this.clienteNuevo = {
      id: 0,
    nombre: '',
    correo: '',
    telefono: '',
    direccion:''
    }
  }

}
