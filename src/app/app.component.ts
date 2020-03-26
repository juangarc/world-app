import { Component, OnInit } from "@angular/core";
import { LoadDataService } from "./services/load-data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
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
  }

 
  ngOnInit() {}
}
