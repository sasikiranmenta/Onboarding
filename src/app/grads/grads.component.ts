import { Component, OnInit } from '@angular/core';
import { GradsService } from './grads.service';
@Component({
  selector: 'app-grads',
  templateUrl: './grads.component.html',
  styleUrls: ['./grads.component.css']
})
export class GradsComponent implements OnInit {

  constructor(private gradsService: GradsService) { }

  ngOnInit(): void {

  }

}
