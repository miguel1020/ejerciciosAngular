import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjercicioUnoComponent } from './ejercicio-uno/ejercicio-uno.component';

// en routes podemos especificar el componente que se ingresa en el buscador, aca podemos
// configurar ingresos a otro componentes mas adelante
const routes: Routes = [{path:'ejercicio-uno', component:EjercicioUnoComponent, pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
