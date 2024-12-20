import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { FlotaComponent } from './components/flota/flota.component';
// Productos
  import { CementoComponent } from './components/cemento/cemento.component';
  import { FierroComponent } from './components/fierro/fierro.component';
  import { LadrilloComponent } from './components/ladrillo/ladrillo.component';


const routes: Routes = [
  {path: '',redirectTo: 'home', pathMatch: 'full'}, // Redirige a 'home' cuando la ruta esté vacía
  { path: 'home', component: HomeComponent },  // Ruta para la página de inicio
  { path: 'home/contacto', component: ContactoComponent },  
  { path: 'home/nosotros', component: NosotrosComponent },
  { path: 'home/flota', component: FlotaComponent },  // Ruta para la página de flota
  // rutas productos:
  { path: 'home/producto/cemento', component: CementoComponent },  // Ruta para la página de flota
  { path: 'home/producto/fierro', component: FierroComponent },  // Ruta para la página de flota
  { path: 'home/producto/ladrillo', component: LadrilloComponent },  // Ruta para la página de flota

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })  // Precarga de módulos (útil si agregas lazy loading)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
