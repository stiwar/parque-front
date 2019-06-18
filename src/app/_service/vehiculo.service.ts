import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from '../_model/Vehiculo';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  
  vehiculoCambio = new Subject<Vehiculo[]>();//variable en estudio, reactiva, aqui se pone la data nueva
  url : string  = `${environment.HOST_URL}/vehiculos`;
  urlGetVehiculoById = `${environment.HOST_URL}/vehiculo`;
  urlPostVehiculo = `${environment.HOST_URL}/vehiculo`;
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Vehiculo[]>(this.url);
  }

  listarPorId(id:number){
    return this.http.get<Vehiculo>(`${this.urlGetVehiculoById}/${id}`);
  }

  registrar(vehiculo: Vehiculo) {
    return this.http.post(`${this.urlPostVehiculo}`, vehiculo);
  }

  modificar(id: number) {
    return this.http.put(`${this.urlGetVehiculoById}/${id}`, {});
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
