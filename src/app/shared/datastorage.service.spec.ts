import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from '@angular/core/testing';
import { DataStorageService } from './datastorage.service';
import { DemandputDetails } from './demandput.model';
import { DemandDetails } from './demand.model';
import { Employee } from '../authentication/employee.model';

describe('data service', () => {
    let httpTestingController: HttpTestingController;
    let service: DataStorageService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });

        service = TestBed.inject(DataStorageService);
        httpTestingController = TestBed.get(HttpTestingController);
    });
    afterEach(() => {
        httpTestingController.verify();
    });

    it('add grad', () => {
        const text = "Saved"
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

        service.storeGrads(mock).subscribe(data => {
            expect(data).toEqual('Saved');
        });
        const req = httpTestingController.expectOne('http://localhost:8080/bookapi/api/onboarding');

        expect(req.request.method).toEqual('POST');
        req.flush(text);
    });

    it('update grad', () => {
        const text = "SAVED"
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
        const id = 1;
        service.updateGrad(id, mock).subscribe((data) => {
            expect(data).toEqual('SAVED');
        })

        const req = httpTestingController.expectOne('http://localhost:8080/bookapi/api/onboarding/1');

        expect(req.request.method).toEqual('PUT');
        req.flush(text);
    });

    it('delete grad', () => {
        const text = "deleted";
        service.deleteGrad(1).subscribe((data) => {
            expect(data).toEqual('deleted');
        });

        const req = httpTestingController.expectOne('http://localhost:8080/bookapi/api/onboarding/1');

        expect(req.request.method).toEqual('DELETE');
        req.flush(text);
    });


    it('delete grad', () => {
        const text = "deleted";
        service.deleteDemand(1).subscribe((data) => {
            expect(data).toEqual('deleted');
        });

        const req = httpTestingController.expectOne('http://localhost:8080/bookapi/api/demand/1');

        expect(req.request.method).toEqual('DELETE');
        req.flush(text);
    });


    it('update demand', () => {
        const text = "updated";
        let demandMock = new DemandputDetails("JAVA", "2020-06-06", "not satisfied", "MUMBAI", 3, 1, "sasi", 2);
        service.updateDemand(1, demandMock).subscribe((data) => {
            expect(data).toEqual('updated');
        })
        const req = httpTestingController.expectOne('http://localhost:8080/bookapi/api/demand/1');

        expect(req.request.method).toEqual('PUT');
        req.flush(text);
    });

    it('add demand', () => {
        const text = "added";
        let demandMock = new DemandDetails(1,"JAVA", "2020-06-06", "not satisfied", "MUMBAI", 3, 1, "sasi", 2);
        service.storeDemands(demandMock).subscribe((data) => {
            expect(data).toEqual('added');
        });
        const req = httpTestingController.expectOne('http://localhost:8080/bookapi/api/demand');

        expect(req.request.method).toEqual('POST');
        req.flush(text);
    });

    it('get demand',()=>{
        const text="success";
        let demandMock = new DemandDetails(1,"JAVA", "2020-06-06", "not satisfied", "MUMBAI", 3, 1, "sasi", 2);

        service.getDemand(1).subscribe((data)=>{
                  expect(data).toEqual(demandMock);
        });
        const req = httpTestingController.expectOne('http://localhost:8080/bookapi/api/demand/1');

        expect(req.request.method).toEqual('GET');
        req.flush(demandMock);
    });


    it('add employee',()=>{
        const text="success";
        let employeeMock = new Employee("sasi","sasi","sasi","sasi");
        service.addEmployee(employeeMock).subscribe((data)=>{
                expect(data).toEqual('success');
        });
        const req = httpTestingController.expectOne('http://localhost:8080/bookapi/api/employee');

        expect(req.request.method).toEqual('POST');
        req.flush(text);
    });
  
    it('get demand',()=>{
        const text="success";
        let employeeMock = new Employee("sasi","sasi","sasi","sasi");

        service.getEmployee(1).subscribe((data)=>{
                  expect(data).toEqual(employeeMock);
        });
        const req = httpTestingController.expectOne('http://localhost:8080/bookapi/api/employee/1');

        expect(req.request.method).toEqual('GET');
        req.flush(employeeMock);
    });

});
