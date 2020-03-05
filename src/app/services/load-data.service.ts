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
    return this.afdb.collection("animales/").snapshotChanges();
  }

  
}
