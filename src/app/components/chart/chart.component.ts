import { Component, OnInit } from "@angular/core";
import { LoadDataService } from "src/app/services/load-data.service";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"]
})
export class ChartComponent implements OnInit {
  value = true
  animals = [];
  subtitle;
  riesgoTitle;
  locations = [];
  animalFin = [];
  zonaDeforestacion;
  riesgo;
  final = [];
  title = "Animales que se encuentran en mayor riesgo según su zona";
  type = "PieChart";
  data = [];
  columnNames = ["Animal", "Zona"];
  options = {};
  width = 1000;
  height = 500;
  constructor(private api: LoadDataService) {
    this.getAllAnimals();
    this.getAllLocations();
    this.getAllZonas();
  }

  getAllAnimals = () => {
    this.api.getAllAnimals().subscribe(
      data => {
        this.animals = [];
        data.forEach((animalsData: any) => {
          this.animals.push({
            animal: animalsData.payload.doc.data().animal,
            propietario: animalsData.payload.doc.data().propietario,
            cantidad: animalsData.payload.doc.data().cantidad,
          });
        });
        console.log(this.animals);

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

  getZona(riesgo) {
    console.log(riesgo);
  }

  getAllLocations = () => {
    this.api.getAllLocations().subscribe(
      data => {
        this.locations = [];
        data.forEach((locationsData: any) => {
          this.locations.push({
            lactitud: locationsData.payload.doc.data().lactitud,
            longitud: locationsData.payload.doc.data().longitud,
            propietario: locationsData.payload.doc.data().propietario
          });
        });
        console.log(this.locations);

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

  methodFinal(lactitudZona) {
    this.riesgoTitle = lactitudZona.nivel_riesgo;
    this.subtitle = lactitudZona.area
    this.value = false
    this.final = this.locations.filter(
      x => x.lactitud == lactitudZona.lactitud && x.longitud == lactitudZona.longitud
    );

    this.animalFin = this.animals.filter(
      x => x.propietario == this.final[0].propietario
    );
    console.log(this.animalFin);
    let animalCantidad = []
    this.animalFin.forEach((animalsData: any) => {
      animalCantidad.push([animalsData.animal, parseInt(animalsData.cantidad)]);
    });
    console.log(animalCantidad);
    
      
    this.title = "Animales que se encuentran en mayor riesgo según su zona";
    this.type = "BarChart";
    this.data = animalCantidad;
    this.columnNames = ["Animal", "Cantidad"];
    this.options = {};
  }

  ngOnInit() {}
}
