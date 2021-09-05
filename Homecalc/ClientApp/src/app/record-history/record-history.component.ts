import { Component, OnInit } from '@angular/core';
import { RecordService } from '../shared/record.service';
import { Record } from '../shared/record.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-record-history',
  templateUrl: './record-history.component.html',
  styleUrls: ['./record-history.component.css']
})
export class RecordHistoryComponent implements OnInit {

  constructor(public service: RecordService, public router: Router) { }

  ngOnInit(): void {
    this.service.getRequest();
  }

  popForm(rec: Record){
    console.log(rec);
    this.router.navigateByUrl('/write-record');
    this.service.formData = rec;
  }

}
