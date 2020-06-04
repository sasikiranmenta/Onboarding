import { Injectable } from '@angular/core';
import { Log } from './log.model';
import { DataStorageService } from './datastorage.service';

@Injectable({
    providedIn: 'root'
})
export class LogService {

    log: Log[];

    constructor(private datastorage: DataStorageService) { }
    addlog(message: string, date: string, id: number) {
        const log = new Log(message, date, id);
        console.log(log.userid);
        this.datastorage.addLog(log).subscribe();
    }

    getLog() {
        this.datastorage.getLog().subscribe((log) => {
            this.log = log;
        });
    }

}