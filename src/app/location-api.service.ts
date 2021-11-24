import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({providedIn: "root"})
export class LocationApi {

    getCountries(): Observable<string[]> {
        return of(["Norway", "Sweden", "Denmark"])
    }

    getRegions(country: string): Observable<string[]> {
        switch(country){
          case "Norway": return  of(["Viken", "Oslo", "Innlandet"]);
          case "Sweden": return of(["Varmland", "Uppland", "Skåne"]);
          case "Denmark": return of(["Midtjylland", "Nordjylland", "Sjælland"]);
          default: return of([]);
        }
    }
}