import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',  // Redirige a 'home' cuando la ruta esté vacía
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },  // Ruta para la página de inicio
  { path: 'home/contacto', component: ContactoComponent },  
  { path: 'home/nosotros', component: NosotrosComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })  // Precarga de módulos (útil si agregas lazy loading)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
