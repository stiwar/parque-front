import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiculoComponent } from './pages/vehiculo/vehiculo.component';
import { VehiculoEdicionComponent } from './pages/vehiculo/vehiculo-edicion/vehiculo-edicion.component';

const routes: Routes = [
  {path:'vehiculos', component:VehiculoComponent, children:[
    {path:'nuevo', component:VehiculoEdicionComponent},
    {path:'edicion/:id', component:VehiculoEdicionComponent}
  ]}//localhost:4200/vehiculos/nuevo      localhost:4200/vehiculos/edicion/1
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
