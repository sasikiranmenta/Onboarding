import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Log } from 'src/app/shared/log.model';

import { DataStorageService } from 'src/app/shared/datastorage.service';
import { AuthenticationService } from '../auth.service';
import { User } from '../user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
  logs: Log[];
  dat = '';
  searchText = '';
  user: User;
  usersub: Subscription;
  constructor(private datastorage: DataStorageService,
              private authService: AuthenticationService
    ) { }

  ngOnInit(): void {
    this.usersub = this.authService.user.subscribe((user) => {
      this.user = user;
    });
    this.datastorage.getLog().subscribe((logs) => {
      this.logs = logs;

    });
  }

  ngOnDestroy() {
    this.usersub.unsubscribe();
  }

}
