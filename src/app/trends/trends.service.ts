import { Injectable } from '@angular/core';
import { DemandDetails } from '../shared/demand.model';
import { DemandService } from '../demand/demand.service';

@Injectable({
    providedIn: 'root'
})
export class Trendservice {
    demands: DemandDetails[];

    myMap = new Map();
    myMaploc = new Map();

    constructor(private demandsservice: DemandService) {

    }

    onGet() {
        this.demands = this.demandsservice.getDemands();
    }
    getSkills() {
        this.myMap.clear();
        for (let demand of this.demands) {
            if (this.myMap.has(demand.skills)) {
                this.myMap.set(demand.skills, this.myMap.get(demand.skills) + +(demand.count));
               
            }
            else {
                this.myMap.set(demand.skills, +(demand.count));
                
            }
        }
        return this.myMap;
    }

    getLoc(){
        this.myMaploc.clear();
        for (let demand of this.demands) {
            if (this.myMap.has(demand.location)) {
                this.myMap.set(demand.location, this.myMap.get(demand.location)+ +(demand.count));
               
            }
            else {
                this.myMap.set(demand.location, +(demand.count));
                
            }
        }
        return this.myMap;
    }
    



}