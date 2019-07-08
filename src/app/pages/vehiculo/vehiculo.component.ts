import { Component, OnInit, ViewChild } from '@angular/core';
import { VehiculoService } from 'src/app/service/vehiculo.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

export interface DataVehiculo{
  id:number;
  tipoVehiculo:string;
  cilindraje:number;
  fechaIngreso:string;
  fechaSalida:string;
  placa:string;
  estado:string;
}

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {
  
  displayedColumns = ['id','placa', 'tipo' ,'cilindraje','fechaIngreso','fechaSalida', 'estado', 'acciones'];
  dataSource: MatTableDataSource<DataVehiculo>;
  totalCobro:number;
  botonCobro:boolean;
  @ViewChild(MatSort,{ static: true }) sort : MatSort;
  @ViewChild(MatPaginator,{ static: true }) paginator : MatPaginator;
  constructor(private vehiculoService : VehiculoService) { }

  ngOnInit() {

    this.vehiculoService.vehiculoCambio.subscribe(data => {
      let dataAux : DataVehiculo[] = [];
      for (let index = 0; index < data.length; index++) {
        dataAux.push(
          {
            id:data[index].id,
            tipoVehiculo:(data[index].tipoVehiculo === 1) ? 'Carro':'Moto',
            cilindraje:data[index].cilindraje,
            fechaIngreso:data[index].fechaIngreso,
            fechaSalida:data[index].fechaSalida,
            placa:data[index].placa,
            estado: (data[index].fechaSalida === null)?"Activo":"Inactivo",
          }
        );
      }
      this.dataSource = new MatTableDataSource(dataAux);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

///////////////////////////////////////////////////////////
    this.vehiculoService.listar().subscribe(data => {
      let dataAux : DataVehiculo[] = [];
      for (let index = 0; index < data.length; index++) {
        dataAux.push(
          {
            id: data[index].id,
            tipoVehiculo: (data[index].tipoVehiculo === 1) ? 'Carro':'Moto',
            cilindraje: data[index].cilindraje,
            fechaIngreso: data[index].fechaIngreso,
            fechaSalida: data[index].fechaSalida,
            placa: data[index].placa,
            estado: (data[index].fechaSalida === null)?"Activo":"Inactivo",
          }
        );
      }
      this.dataSource = new MatTableDataSource(dataAux);
      this.dataSource.sort = this.sort; //activa las 'flechas' de ordenamiento en cada columna del datatable
      this.dataSource.paginator = this.paginator;
    });
  }

  aplicarFiltro(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  generarCobro(idVehiculo: number){

    this.vehiculoService.modificar(idVehiculo).subscribe(responseData=>{
      this.totalCobro = responseData['totalCobro'];
      
      //this.botonCobro = true;
      this.vehiculoService.listar().subscribe(data =>{
        this.vehiculoService.vehiculoCambio.next(data);
      });
    });
  }

}
