import { Component, OnInit } from '@angular/core';
import { RecordService } from '../shared/record.service'

@Component({
  selector: 'app-defpage',
  templateUrl: './defpage.component.html',
  styleUrls: ['./defpage.component.css']
})
export class DefpageComponent implements OnInit {

  constructor(public service: RecordService) { }

  ngOnInit(): void {
  }

}
