import { Component, OnInit } from "@angular/core";
import { LoadDataService } from "./services/load-data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  animals = [];
  title = "Animales que se encuentran en mayor riesgo según su zona";
  type = "PieChart";
  data = [];
  columnNames = ["Animal", "Zona"];
  options = {};
  width = 1000;
  height = 500;
  constructor(private api: LoadDataService) {
    this.getAllAnimals()
  }

  getAllAnimals = () => {
    this.api.getAllAnimals().subscribe(
      data => {
        this.animals = [];
        data.forEach((animalsData: any) => {
          this.animals.push({
            descripcion: animalsData.payload.doc.data()
          });
        });

        this.title = "Animales que se encuentran en mayor riesgo según su zona";
        this.type = "BarChart";
        this.data = this.animals;
        this.columnNames = ["Animal", "Zona"];
        this.options = {};
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
   
  }
}
