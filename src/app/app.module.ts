import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FlotaComponent } from './components/flota/flota.component';
import { LadrilloComponent } from './components/ladrillo/ladrillo.component';
import { CementoComponent } from './components/cemento/cemento.component';
import { FierroComponent } from './components/fierro/fierro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    declarations: [
        AppComponent,
        FlotaComponent,
        LadrilloComponent,
        CementoComponent,
        FierroComponent,
        HomeComponent,
        NosotrosComponent,
        ContactoComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        ReactiveFormsModule ,
        FormsModule, // Agrega FormsModule aquí
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


