'use strict';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const btn = {
  startBtn: document.querySelector('button[data-action="start"'),
  stopBtn: document.querySelector('button[data-action="stop"'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyStyler = {
  body: document.querySelector('body'),
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.timer = setInterval(() => {
      const randomColor = randomIntegerFromInterval(0, colors.length - 1);
      this.body.style.background = colors[randomColor];
      btn.startBtn.classList.add('disabled');
      btn.stopBtn.classList.remove('disabled');
    }, 1000);
  },
  stop() {
    this.isActive = false;
    clearInterval(this.timer);
    btn.stopBtn.classList.add('disabled');
    btn.startBtn.classList.remove('disabled');
  },
};

btn.startBtn.addEventListener('click', bodyStyler.start.bind(bodyStyler));

btn.stopBtn.addEventListener('click', bodyStyler.stop.bind(bodyStyler));
