import { Component, Input, OnInit } from '@angular/core';
import { ChannelModel } from "app/shared/channel.model";

@Component({
  selector: 'app-queue-item',
  templateUrl: './queue-item.component.html',
  styleUrls: ['./queue-item.component.css']
})
export class QueueItemComponent implements OnInit {
  constructor() { }
  @Input() model: ChannelModel;

  ngOnInit() {

  }

}
