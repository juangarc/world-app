import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LoadDataService {
 
  constructor(private afdb: AngularFirestore) {}

  getAllAnimals(): Observable<any> {
    return this.afdb.collection("propietario_animales/").snapshotChanges();
  }

  getAllAnimalsParents(): Observable<any> {
    return this.afdb.collection("propietario_animales/").snapshotChanges();
  }


  getAllParents(): Observable<any> {
    return this.afdb.collection("propietario/").snapshotChanges();
  }


  getAllLocations(): Observable<any> {
    return this.afdb.collection("ubicacion/").snapshotChanges();
  }

  getAllZonas(): Observable<any> {
    return this.afdb.collection("zona_deforestacion/").snapshotChanges();
  }

  
}
