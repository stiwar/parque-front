import { TipoVehiculo } from './TipoVehiculo';

export class Vehiculo{
    id: number;
    tipoVehiculo: TipoVehiculo
    placa: string;
    cilindraje: number;
    fechaIngreso: string;
    fechaSalida: string;
    estado: number;
}