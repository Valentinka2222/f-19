'use strict';

//1. what is context?
//2.when context is lost
//3. how to fix context

export const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalId: null,
  counter: null,

  //none
  //undefined
  startTimer() {
    this.intervalId = setInterval(() => {
      this.secondsPassed += 1;
      if (this.secondsPassed == 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);

    return this.intervalId;
  },
  stopTimer() {
    clearInterval(this.intervalId);
    this.getTime();
  },
  getTime() {
    this.counter = `${this.minsPassed}:${this.secondsPassed.toString().padStart(2, '0')}`;
    return this.counter;
  },
  resetTimer() {
    this.minsPassed = 0;
    this.secondsPassed = 0;
    this.counter = `${this.minsPassed}:${this.secondsPassed.toString().padStart(2, '0')}`;
  },
};
