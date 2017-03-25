import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-queue-item',
  templateUrl: './queue-item.component.html',
  styleUrls: ['./queue-item.component.css']
})
export class QueueItemComponent implements OnInit {
  constructor() { }
  @Input() channel: number;
  @Input() queue: number;

  ngOnInit() {

  }

}
