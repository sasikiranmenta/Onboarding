import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { GradDetails } from '../shared/grad.model';
import { DataStorageService } from '../shared/datastorage.service';
import { GradsService } from './grads.service';

@Injectable({
    providedIn: 'root'
})
export class GradsResolverService implements Resolve<GradDetails[]>{

constructor(private datastorageService: DataStorageService,
            private gradsService: GradsService){}

    resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): GradDetails[] | import("rxjs").Observable<GradDetails[]> | Promise<GradDetails[]> {
        const grads = this.gradsService.getGrads();

        if(grads.length === 0){
            return this.datastorageService.fetchGrads();
        }
        else{
            return grads;
        }
    }

}