import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReadWriteService } from '../read-write.service';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
 thisForm:any;
  constructor(private rWService:ReadWriteService) { }

  ngOnInit(): void {
    this.thisForm = new FormGroup({
      bookingId: new FormControl(''),
      seatNo: new FormControl(''),
      phoneNo:new FormControl('')
    });
    
  }
  onSubmit(){
    let a=this.thisForm.get('bookingId').value;
    let b=this.thisForm.get('seatNo').value;
    let c=this.thisForm.get('phoneNo').value;
    debugger;
this.rWService.addUp(a,b,c);
  }

}
