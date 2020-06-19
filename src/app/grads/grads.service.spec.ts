import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GradsService } from './grads.service';
import { DataStorageService } from '../shared/datastorage.service';
import { of } from 'rxjs';
import { ToastrService, IndividualConfig } from 'ngx-toastr';

describe('Grad Service', () => {
    let gradService: GradsService;
    let httpTestingController: HttpTestingController;
    let dataService: DataStorageService;
    let spy: any;
    const toastrService = {
        success: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { },
        error: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { }
      };
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers:[{ provide: ToastrService, useValue: toastrService }]
        });
        gradService = TestBed.inject(GradsService);
        httpTestingController = TestBed.inject(HttpTestingController);
        dataService = TestBed.inject(DataStorageService);
    });
    afterEach(() => {
        httpTestingController.verify();
    });

    it('For all Grads', () => {
        const mock = [{
            id: 1,
            demandId: 5,
            name: "SasiKiran",
            email: "sasikiranmenta@gmail.com",
            college: "ANGULAR",
            cgpa: 3,
            personalNumber: 9677298294,
            permanentAddress: "13/242,Mungamurivari street,nellore",
            presentAddress: "",
            location: "MUMBAI",
            onboardingStart: "2020-06-26",
            eta: "2020-06-20",
            bgvCheck: "Completed",
            onboardingStatus: "Verfied",
            skills: null
        }];

        spy = spyOn(dataService, 'fetchGrads').and.returnValue(of(mock));
        gradService.setGrads();
        expect(gradService.getGrads()).toEqual(mock);
    });


    it('delete Demand', () => {
        const mock = [{
            id: 1,
            demandId: 5,
            name: "SasiKiran",
            email: "sasikiranmenta@gmail.com",
            college: "ANGULAR",
            cgpa: 3,
            personalNumber: 9677298294,
            permanentAddress: "13/242,Mungamurivari street,nellore",
            presentAddress: "",
            location: "MUMBAI",
            onboardingStart: "2020-06-26",
            eta: "2020-06-20",
            bgvCheck: "Completed",
            onboardingStatus: "Verfied",
            skills: null
        }];

        spy = spyOn(dataService, 'deleteGrad').and.returnValue(of());
        var spy_grad = spyOn(gradService, 'setGrads').and.callThrough();
        gradService.deletegrad(1);
        expect(dataService.deleteGrad).toHaveBeenCalled();
    });

    it('Update Grad', () => {
        const mock = {

            demandId: 5,
            name: "SasiKiran",
            email: "sasikiranmenta@gmail.com",
            college: "ANGULAR",
            cgpa: 3,
            personalNumber: 9677298294,
            permanentAddress: "13/242,Mungamurivari street,nellore",
            presentAddress: "",
            location: "MUMBAI",
            onboardingStart: "2020-06-26",
            eta: "2020-06-20",
            bgvCheck: "Completed",
            onboardingStatus: "Verfied",
            skills: null
        };
        spy = spyOn(dataService, 'updateGrad').and.returnValue(of());
        var spy_grad = spyOn(gradService, 'updateGrad').and.callThrough();
        gradService.updateGrad(1, mock);
        expect(dataService.updateGrad).toHaveBeenCalled();
    });
    it('get grad', () => {
        const mock = [{
            id: 1,
            demandId: 5,
            name: "SasiKiran",
            email: "sasikiranmenta@gmail.com",
            college: "ANGULAR",
            cgpa: 3,
            personalNumber: 9677298294,
            permanentAddress: "13/242,Mungamurivari street,nellore",
            presentAddress: "",
            location: "MUMBAI",
            onboardingStart: "2020-06-26",
            eta: "2020-06-20",
            bgvCheck: "Completed",
            onboardingStatus: "Verfied",
            skills: null
        }, {
            id: 2,
            demandId: 5,
            name: "SasiKiran",
            email: "sasikiranmenta@gmail.com",
            college: "ANGULAR",
            cgpa: 3,
            personalNumber: 9677298294,
            permanentAddress: "13/242,Mungamurivari street,nellore",
            presentAddress: "",
            location: "MUMBAI",
            onboardingStart: "2020-06-26",
            eta: "2020-06-20",
            bgvCheck: "Completed",
            onboardingStatus: "Verfied",
            skills: null
        }];
        spy = spyOn(dataService, 'fetchGrads').and.returnValue(of(mock));
        gradService.setGrads();
        expect(gradService.getGrad(1)).toEqual(mock[1]);
    });

    it('add grad', () => {
        const mockdata = {
            demandid: 5,
            skills: "PYTHON",
            start: "2020-06-18",
            status: "not satisfied",
            location: "MUMBAI",
            count: 3,
            empName: "Kiran",
            scount: 2,
            empid: 2
        };

        spy = spyOn(dataService, 'getDemand').and.returnValue(of(mockdata));
        var spy1 = spyOn(dataService, 'updateDemand').and.returnValue(of());
        
        const mock = {
            demandId: 5,
            name: "SasiKiran",
            email: "sasikiranmenta@gmail.com",
            college: "ANGULAR",
            cgpa: 3,
            personalNumber: 9677298294,
            permanentAddress: "13/242,Mungamurivari street,nellore",
            presentAddress: "",
            location: "MUMBAI",
            onboardingStart: "2020-06-26",
            eta: "2020-06-20",
            bgvCheck: "Completed",
            onboardingStatus: "Verfied",
            skills: null
        };
       let spy3 = spyOn(dataService, 'storeGrads').and.returnValue(of());
        gradService.addGrad(mock);
        expect(dataService.storeGrads).toHaveBeenCalled();
    });

});