import { logEvent } from './logEvents.js';
import EventEmitter from 'node:events'

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()

myEmitter.on('log', (...data) => logEvent(...data))


setTimeout(() => {
  myEmitter.emit('log', 'First message', 'Second message')
}, 2000)