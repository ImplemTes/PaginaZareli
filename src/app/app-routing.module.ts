import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { FlotaComponent } from './components/flota/flota.component';
const routes: Routes = [
  {path: '',redirectTo: 'home', pathMatch: 'full'}, // Redirige a 'home' cuando la ruta esté vacía
  { path: '**', redirectTo: '/home' },  // Redirige a /home si la ruta no existe
  { path: 'home', component: HomeComponent },  // Ruta para la página de inicio
  { path: 'home/contacto', component: ContactoComponent },  
  
  { path: 'home/nosotros', component: NosotrosComponent },
  { path: 'home/flota', component: FlotaComponent },  // Ruta para la página de flota
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })  // Precarga de módulos (útil si agregas lazy loading)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
