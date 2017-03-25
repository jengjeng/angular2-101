export class ChannelModel {
  name: string;
  currentQueue: number;

  constructor (name, currentQueue) {
    this.name = name
    this.currentQueue = currentQueue
  }
}