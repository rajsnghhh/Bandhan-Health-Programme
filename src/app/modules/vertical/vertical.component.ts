import { Component, OnInit } from '@angular/core';
import { VerticalMasterSaveDTO } from '../core/models/verticalMasterDTO.model';

@Component({
  selector: 'app-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.css']
})
export class VerticalComponent implements OnInit {
  itemToEdit: VerticalMasterSaveDTO;
  constructor() { }

  ngOnInit(): void {
  }

  sendEditVerticalData(item) {
    console.log(item);
    this.itemToEdit = item
  }

}
