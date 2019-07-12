import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiculoComponent } from './pages/vehiculo/vehiculo.component';
import { VehiculoEdicionComponent } from './pages/vehiculo/vehiculo-edicion/vehiculo-edicion.component';

const routes: Routes = [
<<<<<<< HEAD
  {
    path: 'vehiculos', component: VehiculoComponent, children: [
      { path: 'nuevo', component: VehiculoEdicionComponent },
      { path: 'cobro/:id', component: VehiculoEdicionComponent }
    ]
  }//localhost:4200/vehiculos/nuevo      localhost:4200/vehiculos/cobro/1
=======
  {path:'vehiculos', component:VehiculoComponent, children:[
    {path:'nuevo', component:VehiculoEdicionComponent},
    {path:'cobro/:id', component:VehiculoEdicionComponent}
  ]}//localhost:4200/vehiculos/nuevo      localhost:4200/vehiculos/edicion/1
>>>>>>> 8df64a2b739be36a580cd22b8c8c33ba59437c96
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
