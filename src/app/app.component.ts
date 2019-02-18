import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
nombre= "Eugenio";
nombre2="eugeNio cisCar fernAndez"
array=[1,2,3,4,5,6,7,8,9,10]

PI=Math.PI;

a= 0.234;

salario = 1234.5;
heroe={
  nombre:"Superman",
  clave:"Wolverine",
  edad:500,
  direccion:{
    calle:"del medio",
    numero:"12"
  }
};

valorDePromesa = new Promise( (resolve, reject)=>{
  setTimeout( ()=>resolve('Llego la data!'),3500);
});

fecha=new Date();

video="aD6eQjwB-0o"

}
