import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { VehiculoService } from 'src/app/service/vehiculo.service';
import { Vehiculo } from 'src/app/model/Vehiculo';
import { TipoVehiculo } from 'src/app/model/TipoVehiculo';

@Component({
  selector: 'app-vehiculo-edicion',
  templateUrl: './vehiculo-edicion.component.html',
  styleUrls: ['./vehiculo-edicion.component.css']
})
export class VehiculoEdicionComponent implements OnInit {

  vehiculo: Vehiculo
  form: FormGroup;
  isVisibility: boolean = false;

  constructor(private vehiculoService: VehiculoService, private router: Router) {

    this.vehiculo = new Vehiculo();

    this.form = new FormGroup({
      placa: new FormControl('',Validators.required),
      cilindraje: new FormControl(''),
      tipoVehiculo: new FormControl('',Validators.required)
    });

  }

  ngOnInit() {
  }

  registrar() {
    
    this.vehiculo.placa = this.form.value['placa'];
    this.vehiculo.cilindraje = this.form.value['cilindraje'] != '' ? this.form.value['cilindraje'] : null;
    this.vehiculo.tipoVehiculo = this.form.value['tipoVehiculo'];
    
    this.vehiculoService.registrar(this.vehiculo).subscribe(() => {
      this.vehiculoService.listar().subscribe(data => {
        this.vehiculoService.vehiculoCambio.next(data);//aqui es donde se inserta la nueva data tras la modificacion en la variable reactiva 'vehiculoCambio' para que el componente suscrito VehiculoComponent sea notificado y actualice la tabla
      });
    });

    this.router.navigate(['vehiculos']);
  }

  mostrarOcultarCilindraje(){
    //this.isVisibility = this.form.get('tipoVehiculo').value == 1 ? false : true;
    if( this.form.get('tipoVehiculo').value == 1 ){
      this.form.get('cilindraje').setValue('');
      this.isVisibility = false;
      //this.form.get('cilindraje').disable();
    }else
      this.isVisibility = true;
      
  }

}
