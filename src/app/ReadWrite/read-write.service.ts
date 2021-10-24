import { Injectable } from '@angular/core';

export interface Type{
bookingId:string,
seatNo:number,
phoneNo:string
}
@Injectable({
  providedIn: 'root'
})
export class ReadWriteService {

  thisArray:{
    bookingId:string,
    seatNo:number,
    phoneNo:string
  }[]=[];
  constructor() { }
addUp(a:string, b:number,c:string ){
  let Instance={} as Type;
  Instance.bookingId=a
  Instance.seatNo=b;
  Instance.phoneNo=c;
this.thisArray.push(
  Instance
);
debugger;

}
getUp(){
  
  return this.thisArray;
}
}
