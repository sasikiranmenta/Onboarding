import { GradDetails } from '../shared/grad.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DataStorageService } from '../shared/datastorage.service';
import { GradPutDetails } from '../shared/gradput.model';
import { DemandputDetails } from '../shared/demandput.model';
import { DemandDetails } from '../shared/demand.model';


@Injectable({
    providedIn: 'root'
})
export class GradsService {
    demand: DemandDetails;

    gradsChanged = new Subject<GradDetails[]>();

    constructor(private dataservice: DataStorageService) { }

    private grads: GradDetails[] ;

    getGrads() {
        return this.grads.slice();

    }

    getGrad(index: number) {
        return this.grads[index];

    }

    addGrad(grad: GradPutDetails) {
        this.dataservice.getDemand(grad.demandId).subscribe((dem)=>{
            this.demand = dem;
            this.demand.scount++;
            if(+(this.demand.count) === this.demand.scount){
                this.demand.status = "satisfied";
            }
            console.log(this.demand);const demput = new DemandputDetails(this.demand.skills,this.demand.start,this.demand.status
                ,this.demand.location,this.demand.count,this.demand.empid,this.demand.empName,this.demand.scount);
    
            this.dataservice.updateDemand(this.demand.demandid,demput).subscribe();
    
        });

        this.dataservice.storeGrads(grad).subscribe(()=>{
            this.setGrads();
        },() =>{this.setGrads();});
        
        
        
        


    }

    updateGrad(index: number, grad: GradPutDetails) {
        console.log(grad);
        this.dataservice.updateGrad(index,grad).subscribe(()=>{
            this.setGrads();
        },()=>{
            this.setGrads();
        });
        
    }

    deletegrad(index: number) {
        this.dataservice.deleteGrad(index).subscribe(()=>{
            this.setGrads();
        },()=>{
            this.setGrads();
        });
    
    }

    setGrads() {
        this.dataservice.fetchGrads().subscribe( grads  => {
                this.grads = grads;
                this.gradsChanged.next(this.grads.slice());
            }
        );
        
    }


}
