import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { VehiculoService } from 'src/app/_service/vehiculo.service';
import { Vehiculo } from 'src/app/_model/Vehiculo';
import { TipoVehiculo } from 'src/app/_model/TipoVehiculo';

@Component({
  selector: 'app-vehiculo-edicion',
  templateUrl: './vehiculo-edicion.component.html',
  styleUrls: ['./vehiculo-edicion.component.css']
})
export class VehiculoEdicionComponent implements OnInit {
  vehiculo: Vehiculo
  form : FormGroup;
  cobro: boolean;
  id:number;
  tipoVehiculoSeleccionado = 0;
  constructor(private vehiculoService: VehiculoService, private router:Router, private route : ActivatedRoute) { }

  ngOnInit() {
    this.vehiculo = new Vehiculo();

    this.form = new FormGroup({
      'id' : new FormControl(0),
      'placa' : new FormControl(''),
      'cilindraje' : new FormControl(''),
      'selectTipoVehiculo' : new FormControl(0)
    });

    this.route.params.subscribe((params:Params) => {
      this.id = params['id']; //es 'id' xq en el routing le pusieron id
      this.cobro = this.id != null;

      this.initForm();//funcion creada para inicializar formulario
    });
  }

  initForm(){
    if(this.cobro){
      //cargar la data del servicio hacia el form, se necesita la capa de VehiculoService para usar el metodo listar (por eso en el constructor va private vehiculoService:)
      this.vehiculoService.listarPorId(this.id).subscribe(data =>{
        console.log(data);
        this.form = new FormGroup({
          'id' : new FormControl(data.id),
          'placa' : new FormControl(data.placa),
          'cilindraje' : new FormControl(data.cilindraje)
        });
      });
    }
  }

  operar(){
    //this.vehiculo.id = this.form.value['id'];
    this.vehiculo.placa = this.form.value['placa'];
    this.vehiculo.cilindraje = this.form.value['cilindraje'] != '' ? this.form.value['cilindraje'] : null;
    let nombreTipoVehiculo : string = this.tipoVehiculoSeleccionado == 1 ? 'Carro':'Moto';
    this.vehiculo.tipoVehiculo = new TipoVehiculo(this.tipoVehiculoSeleccionado,nombreTipoVehiculo);

    if(this.cobro){
      this.vehiculo.id = this.form.value['id'];
      this.vehiculoService.modificar(this.vehiculo.id).subscribe(()=>{
        this.vehiculoService.listar().subscribe(data =>{
          this.vehiculoService.vehiculoCambio.next(data);//aqui es donde se inserta la nueva data tras la modificacion
        });
      });
    }else{
      //insercion
      this.vehiculoService.registrar(this.vehiculo).subscribe(()=>{
        this.vehiculoService.listar().subscribe(data =>{
          this.vehiculoService.vehiculoCambio.next(data);//aqui es donde se inserta la nueva data tras la modificacion
        });
      });
    }

    this.router.navigate(['vehiculos']);
  }

}
