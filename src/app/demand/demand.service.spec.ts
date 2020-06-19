import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DemandService } from './demand.service';
import { DataStorageService } from '../shared/datastorage.service';
import { of } from 'rxjs/internal/Observable/of';
import { DemandputDetails } from '../shared/demandput.model';
import { DemandDetails } from '../shared/demand.model';
import { ToastrService, IndividualConfig } from 'ngx-toastr';

describe('DemandService', () => {
    let service: DemandService;
    let httpTestingController: HttpTestingController;
    let service2: DataStorageService;
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
        service = TestBed.inject(DemandService);
        service2 = TestBed.inject(DataStorageService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });
    afterEach(() => {
        httpTestingController.verify();

    });

    it('For all Demands', () => {
        const mock = [{
            demandid: 1,
            skills: "PYTHON",
            start: "2020-06-18",
            status: "not satisfied",
            location: "MUMBAI",
            count: 3,
            empName: "Kiran",
            scount: 2,
            empid: 2
        }];

        spy = spyOn(service2,'fetchDemand').and.returnValue(of(mock));
        service.setDemands();
        expect(service.getDemands()).toEqual(mock);

    }
    );


    it('delete demand',() =>{
        const mock = [{
            demandid: 1,
            skills: "PYTHON",
            start: "2020-06-18",
            status: "not satisfied",
            location: "MUMBAI",
            count: 3,
            empName: "Kiran",
            scount: 2,
            empid: 2
        }];

        spy = spyOn(service2,'deleteDemand').and.returnValue(of());
        var spy_dem = spyOn(service,'setDemands').and.callThrough();
        service.deleteDemand(1);
        expect(service2.deleteDemand).toHaveBeenCalled();

    });

    it('update demand', () =>{
        let demandMock = new DemandputDetails("JAVA","2020-06-06","not satisfied","MUMBAI",3,1,"sasi",2);
        spy = spyOn(service2,'updateDemand').and.returnValue(of());
        var spy_dem = spyOn(service,'updateDemand').and.callThrough();
        service.updateDemand(1,demandMock);
        expect(service2.updateDemand).toHaveBeenCalled();
    })

    it('get demand',()=>{
        const mock = [{
            demandid: 1,
            skills: "PYTHON",
            start: "2020-06-18",
            status: "not satisfied",
            location: "MUMBAI",
            count: 3,
            empName: "Kiran",
            scount: 2,
            empid: 2
        },{
            demandid: 2,
            skills: "PYTHON",
            start: "2020-06-18",
            status: "not satisfied",
            location: "MUMBAI",
            count: 3,
            empName: "Kiran",
            scount: 2,
            empid: 2
        }];

        spy = spyOn(service2,'fetchDemand').and.returnValue(of(mock));
        service.setDemands();
        
        expect(service.getDemand(1)).toEqual(mock[1]);

    });


    it('add demand',() => {
        let demandMock = new DemandDetails(1,"JAVA","2020-06-06","not satisfied","MUMBAI",3,1,"sasi",2);
        spy = spyOn(service2,'storeDemands').and.returnValue(of());
        service.addDemand(demandMock);
        expect(service2.storeDemands).toHaveBeenCalled();
    })
});