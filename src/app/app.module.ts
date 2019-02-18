import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{CapitalizadoPipe} from './pipes/capitalizado.pipe';


import { AppComponent } from './app.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenapipePipe } from './pipes/contrasenapipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenapipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
