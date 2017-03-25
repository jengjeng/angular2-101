import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-admin-controls',
  templateUrl: './admin-controls.component.html',
  styleUrls: ['./admin-controls.component.css']
})
export class AdminControlsComponent implements OnInit {

  @Input() channelCount:number;
  channelNumbers: number[] = [];
  inputChannel: string = '1';
  @Output() onChannelSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.channelNumbers = Array.from(Array(this.channelCount).keys()).map(v => v + 1)
  }

  nextQueue() {
    this.onChannelSelected.emit(this.inputChannel)
  }

}
