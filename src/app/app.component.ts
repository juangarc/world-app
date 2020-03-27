import { Component, OnInit } from "@angular/core";
import { LoadDataService } from "./services/load-data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  lat:number = 3.42158
  lng:number = -76.5205
  zonaDeforestacion = []
/*   animals = [];
  locations = [];
  zonaDeforestacion;
  final = [];
  title = "Animales que se encuentran en mayor riesgo según su zona";
  type = "PieChart";
  data = [];
  columnNames = ["Animal", "Zona"];
  options = {};
  width = 1000;
  height = 500; */
  constructor(private api: LoadDataService) {

    //this.getAllAnimals();
  /*   this.getAllLocations()
    this.getAllZonas(); */
    this.getAllZonas(); 
  }

  getAllZonas = () => {
    this.api.getAllZonas().subscribe(
      data => {
        this.zonaDeforestacion = [];
        data.forEach((ZonasData: any) => {
          this.zonaDeforestacion.push({
            lactitud: ZonasData.payload.doc.data().lactitud,
            longitud: ZonasData.payload.doc.data().longitud,
            area: ZonasData.payload.doc.data().area,
            nivel_riesgo: ZonasData.payload.doc.data().nivel_riesgo
          });
        });
        console.log(this.zonaDeforestacion);
        /*   this.title = "Animales que se encuentran en mayor riesgo según su zona";
        this.type = "BarChart";
        this.data = this.animals;
        this.columnNames = ["Animal", "Zona"];
        this.options = {}; */
      },
      error => {
        console.log(error);
      }
    );
  };

 
  ngOnInit() {}
}
