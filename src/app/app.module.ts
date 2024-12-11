import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FlotaComponent } from './components/flota/flota.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        AppComponent,
        FlotaComponent,
        HomeComponent,
        NosotrosComponent,
        ContactoComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


