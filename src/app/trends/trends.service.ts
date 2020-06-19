import { Injectable } from '@angular/core';
import { DemandDetails } from '../shared/demand.model';
import { DemandService } from '../demand/demand.service';
import { DataStorageService } from '../shared/datastorage.service';

@Injectable({
    providedIn: 'root'
})
export class Trendservice {
    // demands: DemandDetails[];

    myMap = new Map();
    myMaploc = new Map();
    mymaphm = new Map();

    constructor(private dataStorageService: DataStorageService) {

    }

    onGet() {
        this.dataStorageService.fetchDemand().subscribe((demands) => {
            this.myMaploc.clear();
            for (let demand of demands) {
                if (this.myMaploc.has(demand.location)) {
                    this.myMaploc.set(demand.location, this.myMaploc.get(demand.location) + +(demand.count));

                }
                else {
                    this.myMaploc.set(demand.location, +(demand.count));

                }
            }
            
            this.mymaphm.clear();
            for (let demand of demands) {
                if (this.mymaphm.has(demand.empid)) {
                    this.mymaphm.set(demand.empid, this.mymaphm.get(demand.empid) + +(demand.count));
                }
                else {
                    this.mymaphm.set(demand.empid, +(demand.count));
                }
            }
            this.myMap.clear();
            for (let dem of demands) {
                if (this.myMap.has(dem.skills)) {
                    this.myMap.set(dem.skills, this.myMap.get(dem.skills) + +(dem.count));

                }
                else {
                    this.myMap.set(dem.skills, +(dem.count));

                }
            }

        });
    }
    getSkills() {

        return this.myMap;
    }

    getLoc() {

        return this.myMaploc;
    }

    getHm() {

        return this.mymaphm;
    }



}