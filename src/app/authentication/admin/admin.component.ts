import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/shared/log.model';
import { LogService } from 'src/app/shared/log.service';
import { DataStorageService } from 'src/app/shared/datastorage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
logs: Log[];
  constructor(private datastorage: DataStorageService) { }

  ngOnInit(): void {

    this.datastorage.getLog().subscribe((logs)=>{
      this.logs = logs;

    });
  }

}
