import { Component, OnInit } from '@angular/core';
import { ReadWriteService, Type } from '../read-write.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
isTrue:any=true;
  constructor(private rWService:ReadWriteService) { }
Array:any;
sortedArray:any;
  ngOnInit(): void {
  }
  onGet(){
this.Array=this.rWService.getUp();
this.isTrue=true;
debugger;
  }
  onSort(){
this.isTrue=false;
 this.sortedArray = this.sortArrayOfObjects(this.Array, "seatNo", "descending")

  }
   sortArrayOfObjects = <Type>(
    data: Type[],
    keyToSort: keyof Type,
    direction: 'ascending' | 'descending' | 'none',
  ) => {
    if (direction === 'none') {
      return data
    }
    const compare = (objectA: Type, objectB: Type) => {
      const valueA = objectA[keyToSort]
      const valueB = objectB[keyToSort]
  
      if (valueA === valueB) {
        return 0
      }
  
      if (valueA > valueB) {
        return direction === 'ascending' ? 1 : -1
      } else {
        return direction === 'ascending' ? -1 : 1
      }
    }
  
    return data.slice().sort(compare)
  }
}

