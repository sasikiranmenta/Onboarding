import { Injectable } from '@angular/core';
import { DemandDetails } from '../shared/demand.model';
import { Subject } from 'rxjs';
import { DataStorageService } from '../shared/datastorage.service';
import { DemandputDetails } from '../shared/demandput.model';

@Injectable({
    providedIn: 'root'
})
export class DemandService {

    demandsChanged = new Subject<DemandDetails[]>();

    constructor(private dataservice: DataStorageService) { }

    private demands: DemandDetails[];

    getDemand(index: number) {
        return this.demands[index];
    }

    deleteDemand(index: number) {
        this.dataservice.deleteDemand(index).subscribe(() => {
            this.setDemands();
        },()=>{
            this.setDemands();
        });
       

    }
    getDemands() {
        return this.demands.slice();
    }

    addDemand(demand: DemandDetails) {
        this.dataservice.storeDemands(demand).subscribe(() => {
            this.setDemands();
        },()=>{
            this.setDemands();
        });
        

    }

    updateDemand(index: number, demand: DemandputDetails) {
        console
        this.dataservice.updateDemand(index, demand).subscribe(()=>{
            this.setDemands();
        },()=>{
            this.setDemands();
        });
        
    }

    setDemands() {
        this.dataservice.fetchDemand().subscribe(demands => {
            this.demands = demands;
            this.demandsChanged.next(this.demands.slice());
            });
            


    }
}