import { Injectable } from '@angular/core';
import { DemandDetails } from '../shared/demand.model';
import { Subject } from 'rxjs';
import { DataStorageService } from '../shared/datastorage.service';
import { DemandputDetails } from '../shared/demandput.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class DemandService {

    demandsChanged = new Subject<DemandDetails[]>();

    constructor(private dataservice: DataStorageService,private toastr: ToastrService) { }

    public demands: DemandDetails[];

    getDemand(index: number) {
        return this.demands[index];
    }

    deleteDemand(index: number) {
        this.dataservice.deleteDemand(index).subscribe(() => {
            this.setDemands();
        },()=>{
            this.setDemands();
        });
       
        this.toastr.success('','Deleted Succesfully',{timeOut:3000,positionClass: 'toast-bottom-right'});
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
        this.toastr.success('demand for '+demand.skills+' at '+demand.location+' has been created' ,'New Demand added Succesfully',{timeOut:3000,positionClass: 'toast-bottom-right'});

    }

    updateDemand(index: number, demand: DemandputDetails) {
        
        this.dataservice.updateDemand(index, demand).subscribe(()=>{
            this.setDemands();
        },()=>{
            this.setDemands();
        });
        this.toastr.success('demand for '+demand.skills+' at '+demand.location+' has been changed','Updated Succesfully',{timeOut:3000,positionClass: 'toast-bottom-right'});
    }

    setDemands() {
        this.dataservice.fetchDemand().subscribe(demands => {
            this.demands = demands;
            this.demandsChanged.next(demands);
            //this.sendDemands(this.demands);
            });
            


    }

    sendDemands(demands: DemandDetails[]){
        this.demandsChanged.next(demands);
    }
}