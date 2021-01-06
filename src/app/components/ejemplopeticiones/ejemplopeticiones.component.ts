import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-ejemplopeticiones',
  templateUrl: './ejemplopeticiones.component.html',
  styles: [
  ]
})
export class EjemplopeticionesComponent implements OnInit {
  paises:any[]=[];

  constructor( private http:HttpClient) {
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe((resp:any) => {
      console.log(resp);
      this.paises=resp;
    })
   }

  ngOnInit(): void {
  }

}
