import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'

@Injectable()
export class DataService{
    
    constructor(
        private aft:AngularFirestore
    ){}
    
    getHome(): Observable<any>{
        return this.aft.collection("home").valueChanges()
    }

    getPortfolio(): Observable<any>{
        return this.aft.collection('portfolio').valueChanges()
    }

    getCategoires(): Observable<any>{
        return this.aft.collection("categories").valueChanges()
    }

    getSobre(): Observable<any>{
        return this.aft.collection("about").valueChanges()
    }

    getTeam():Observable<any>{
        return this.aft.collection('team').valueChanges()
    }
}