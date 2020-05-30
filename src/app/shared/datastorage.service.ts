import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { GradsService } from '../grads/grads.service';
import { GradDetails } from './grad.model';
import { GradPutDetails } from './gradput.model';


@Injectable({ providedIn: 'root' })
export class DataStorageService {

    constructor(
        private http: HttpClient
    ) { }

    storeGrads(grad: GradDetails) {

        return this.http
            .post(
                'http://localhost:8080/bookapi/api/onboarding', grad
            );
                }

    updateGrad(id: number, grad: GradPutDetails) {
        return this.http.put(
            "http://localhost:8080/bookapi/api/onboarding/"+id ,grad
        );
    }



    fetchGrads() {
        return this.http
            .get<GradDetails[]>(
                'http://localhost:8080/bookapi/api/onboarding'
            );
    }


    deleteGrad(id: number){
       return this.http.delete("http://localhost:8080/bookapi/api/onboarding/"+id);
    }

}
