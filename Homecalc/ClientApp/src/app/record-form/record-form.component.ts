import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Record } from '../shared/record.model';
import { RecordService } from '../shared/record.service';

@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.css']
})
export class RecordFormComponent implements OnInit {

  constructor(public record: Record, public service: RecordService) { }

  list: number[] = [];
  monthList: string[] = [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ];
  i: number = 0;
  dateTime: Date = new Date();
  currYear = this.dateTime.getFullYear();
  currMonth = this.dateTime.getMonth();


  ngOnInit(): void {
    this.record = new Record();
    console.log(this.currYear);
    console.log(this.currMonth);
    for (this.i = 0; this.i < 50; this.i++){
      this.list[this.i] = 2015 + this.i;
    }
    this.updateVars();
    console.log("did in init!");
  }
  
  refresh(){
    this.service.refresh();
    this.updateVars()
  }

/*
  Funcs to calc full price
*/

  elCountPrev: number = 0;
  waterHotCountPrev: number = 0;
  waterHotDrainageCountPrev: number = 0;
  waterColdCountPrev: number = 0;

  total: number = 0;
  zaDvoih: number = 0;
  kOplate: number = 0;
  elTotal: number = 0;
  waterHotTotal: number = 0;
  waterHotDrinageTotal: number = 0;
  waterColdTotal: number = 0;

  roundsAll(){
    this.total = Math.round(this.total * 100) / 100;
    this.zaDvoih = Math.round(this.zaDvoih * 100) / 100;
    this.kOplate = Math.round(this.kOplate * 100) / 100;
  }
  updateVars(){
    this.elTotal = (this.record.electricityCount-this.elCountPrev)*this.record.electricityPrice;
    this.waterHotTotal = (this.record.waterHotCount-this.waterHotCountPrev)*this.record.waterHotPrice;
    this.waterHotDrinageTotal = (this.record.waterHotDrainageCount-this.waterHotDrainageCountPrev)*this.record.waterHotDrinagePrice;
    this.waterColdTotal = (this.record.waterColdCount-this.waterColdCountPrev)*this.record.waterColdPrice;

    this.total = this.elTotal + this.waterHotTotal + this.waterHotDrinageTotal + this.waterColdTotal + this.record.heatingPrice + 
        this.record.intercomSysPrice + this.record.osbb + this.record.trashDeliver + this.record.triolan;

    this.zaDvoih = ((this.total/3)*2) + (this.record.triolan / 2);
    this.kOplate = (this.total/3)*2;
  }
  

  el1(event: any){
    this.record.electricityCount = parseInt(event.target.value);
    this.updateVars();
    this.roundsAll();
  }
  el2(event: any){
    this.elCountPrev = parseInt(event.target.value);
    if (this.elCountPrev > this.record.electricityCount){
      this.elCountPrev = this.record.electricityCount;
    }
    this.updateVars();
    this.roundsAll();
  }
  el3(event: any){
    this.record.electricityPrice = parseFloat(event.target.value);
    this.updateVars();
    this.roundsAll();
  }


  waterHot1(event: any){
    this.record.waterHotCount = parseInt(event.target.value);
    this.updateVars();
    this.roundsAll();
  }
  waterHot2(event: any){
    this.waterHotCountPrev = parseInt(event.target.value);
    if (this.waterHotCountPrev > this.record.waterHotCount){
      this.waterHotCountPrev = this.record.waterHotCount;
    }
    this.updateVars();
    this.roundsAll();
  }
  waterHot3(event: any){
    this.record.waterHotPrice = parseFloat(event.target.value);
    this.updateVars();
    this.roundsAll();
  }


  waterHotDrainage1(event: any){
    this.record.waterHotDrainageCount = parseInt(event.target.value);
    this.updateVars();
    this.roundsAll();
  }
  waterHotDrainage2(event: any){
    this.waterHotDrainageCountPrev = parseInt(event.target.value);
    if (this.waterHotDrainageCountPrev > this.record.waterHotDrainageCount){
      this.waterHotDrainageCountPrev = this.record.waterHotDrainageCount;
    }
    this.updateVars();
    this.roundsAll();
  }
  waterHotDrainage3(event: any){
    this.record.waterHotDrinagePrice = parseFloat(event.target.value);
    this.updateVars();
    this.roundsAll();
  }


  waterCold1(event: any){
    this.record.waterColdCount = parseInt(event.target.value);
    this.updateVars();
    this.roundsAll();
  }
  waterCold2(event: any){
    this.waterColdCountPrev = parseInt(event.target.value);
    if (this.waterColdCountPrev > this.record.waterColdCount){
      this.waterColdCountPrev = this.record.waterColdCount;
    }
    this.updateVars();
    this.roundsAll();
  }
  waterCold3(event: any){
    this.record.waterColdPrice = parseFloat(event.target.value);
    
    this.updateVars();
    this.roundsAll();
  }

  heat(event: any){
    this.record.heatingPrice = parseFloat(event.target.value);

    this.updateVars();
    this.roundsAll();
  }
  intercom(event: any){
    this.record.intercomSysPrice = parseFloat(event.target.value);

    this.updateVars();
    this.roundsAll();
  }
  oSBBcalc(event: any){
    this.record.osbb = parseFloat(event.target.value);

    this.updateVars();
    this.roundsAll();
  }
  trash(event: any){
    this.record.trashDeliver = parseFloat(event.target.value);
    this.updateVars();
    this.roundsAll();
  }
  triolancalc(event: any){
    this.record.triolan = parseFloat(event.target.value);

    this.updateVars();
    this.roundsAll();
  }


  onSubmit(form: NgForm){
    if(this.service.formData.id == 0){
      this.insertRecord(form);
    } else{
      this.updateRecord(form);
    }
  }
  insertRecord(form: NgForm){
    this.service.postRequest().subscribe(
      res => {
        this.resetForm(form);
        this.service.getRequest();
        console.log("done");
      }, err => {
        console.log("Error: " + err);
      }
    )
  }
  updateRecord(form: NgForm){
    this.service.putRequest().subscribe(
      res => {
        this.resetForm(form);
        this.service.getRequest();
        console.log("done");
      }, err => {
        console.log("Error: " + err);
      }
    )
  }

  resetForm(form: NgForm){
    form.form.reset();
    this.elCountPrev = 0;
    this.waterHotCountPrev = 0;
    this.waterHotDrainageCountPrev = 0;
    this.waterColdCountPrev = 0;
    this.service.formData = new Record();
  }

}
