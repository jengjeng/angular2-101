import { Component, OnInit } from '@angular/core';
import { ChannelModel } from "app/shared/channel.model";
import { QueueService } from "app/layout/shared/Queue.service";
import { Http } from '@angular/http';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

export class LayoutComponent implements OnInit {
  opdRoom : string[];
  channels: ChannelModel[] = [];
  currentQueue: number = 0;

  constructor(private _queue : QueueService) {
    this._queue.get.room.list().subscribe((result)=>{
      this.channels = result.json().filter(r => r)
    })
  }

  ngOnInit() {
  }

  nextQueue(channel) {
    this.channels[channel - 1].currentQueue = ++this.currentQueue;
  }

}
