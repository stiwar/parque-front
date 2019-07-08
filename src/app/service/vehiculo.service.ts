import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from '../model/Vehiculo';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  
  vehiculoCambio = new Subject<Vehiculo[]>();//variable en estudio, reactiva, aqui se pone la data nueva
  url : string  = `${environment.HOST_URL}/vehiculos`;
  urlPostPutVehiculo = `${environment.HOST_URL}/vehiculo`;
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Vehiculo[]>(this.url);
  }

  registrar(vehiculo: Vehiculo) {
    return this.http.post(`${this.urlPostPutVehiculo}`, vehiculo);
  }

  modificar(id: number) {
    return this.http.put(`${this.urlPostPutVehiculo}/${id}`, {});
  }

}
