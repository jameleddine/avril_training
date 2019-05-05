import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
@Input() hereosf:any = [];
@Output() sendfromFilsToFather = new EventEmitter()
count : number = 100;  
constructor() { }

  ngOnInit() {
    this.sendfromFilsToFather.emit(this.count);
  }

}
