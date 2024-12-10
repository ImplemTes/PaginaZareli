import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',  // Redirige a 'home' cuando la ruta esté vacía
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },  // Ruta para la página de inicio
  { path: 'contacto', component: ContactoComponent },  // Ruta para la página de contacto
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })  // Precarga de módulos (útil si agregas lazy loading)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
