import { Component, OnInit, ViewChild } from '@angular/core';
import { VehiculoService } from 'src/app/_service/vehiculo.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Vehiculo } from 'src/app/_model/Vehiculo';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {
  displayedColumns = ['id','placa','cilindraje','fechaIngreso','fechaSalida', 'estado', 'acciones'];
  dataSource: MatTableDataSource<Vehiculo>;
  @ViewChild(MatSort,{ static: true }) sort : MatSort;
  @ViewChild(MatPaginator,{ static: true }) paginator : MatPaginator;
  constructor(private vehiculoService : VehiculoService) { }

  ngOnInit() {

    this.vehiculoService.vehiculoCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });


    this.vehiculoService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  aplicarFiltro(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
