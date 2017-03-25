import { Component, OnInit } from '@angular/core';
import { ChannelModel } from "app/shared/channel.model";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

export class LayoutComponent implements OnInit {

  channels: ChannelModel[] = [];
  currentQueue: number = 0;

  constructor() {

    for (let i = 1; i <= 16; i++) {
      this.channels.push(new ChannelModel(i.toString(), 0));
    }

    console.log(this.channels)

  }

  ngOnInit() {
  }

  nextQueue(channel) {
    this.channels[channel - 1].currentQueue = ++this.currentQueue;
  }

}
