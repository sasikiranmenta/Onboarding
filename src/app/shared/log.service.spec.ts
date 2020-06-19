import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LogService } from './log.service';
import { DataStorageService } from './datastorage.service';
import { of } from 'rxjs';

describe('logService',()=>{
    let logService: LogService;
    let dataService: DataStorageService;
    let httpTestingController: HttpTestingController;
    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
      logService = TestBed.inject(LogService);
      dataService = TestBed.inject(DataStorageService);
      httpTestingController = TestBed.inject(HttpTestingController);

    });
    afterEach(()=>{
httpTestingController.verify();
    });


    it('get log',()=>{

        const mock =[ {
            id: 31,
            message: "new onboardee has been created ",
            date: "2020-06-05",
            userid: 1
        }];
        let spy = spyOn(dataService,'getLog').and.returnValue(of(mock));
        logService.getLog();
        expect(logService.log).toEqual(mock);
    });

    it('add log',()=>{
        let spy = spyOn(dataService,'addLog').and.returnValue(of());
        logService.addlog("addded","2020-06-07",1);
        expect(dataService.addLog).toHaveBeenCalled();
    });

});