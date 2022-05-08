'use strict';

//1. what is context?
//2.when context is lost
//3. how to fix context

export const timer = {
  secondsPassed: 0,
  minPassed: 0,
  intervalId: null,
  counter: null,
  isPause: false,

  //none
  //undefined
  startTimer() {
    this.intervalId = setInterval(() => {
      this.isPause = false;
      console.log(this);
      if (this.secondsPassed < 60) {
        this.secondsPassed += 1;
      } else {
        console.log(this);
        this.minPassed += 1;
        this.secondsPassed = 0;
      }

      this.getTime();
    }, 1000);
    return this.intervalId;
  },
  stopTimer() {
    this.isPause = true;
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  },
  getTime() {
    this.counter = `${this.minPassed}:${this.secondsPassed.toString().padStart(2, '0')}`;

    return this.counter;
  },
  resetTimer() {
    this.counter = null;
  },
};
