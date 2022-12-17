import { Component, OnInit } from '@angular/core';
import { ServiciosService } from './services/servicios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  gameofThrones: any;
  public firstName: String = '';
  public lastName: String = '';
  public fullName: String = '';
  public title: String = '';
  public imageUrl: String = '';
  public family: String = '';
  constructor(public servicio: ServiciosService) {}
  ngOnInit() {
    this.servicio.getUsers();
    this.servicio.getUsers().subscribe(
      (r: any) => {
        this.gameofThrones = r;
        console.log(r);
      },
      (e: any) => {
        console.error(e);
      }
    );
  }
}
