import {WAIT_FOR, WAIT_INTERVAL} from './constants'

export default class ThingWithTimers {
  delayViaInterval(callAfter = WAIT_FOR, intervalSize = WAIT_INTERVAL) {
    return new Promise(resolve => {
      let waitingFor = 0
      const interval = setInterval(() => {
        waitingFor += intervalSize
        console.log({waitingFor})
        if (waitingFor > callAfter) {
          clearInterval(interval)
          resolve()
        }
      }, intervalSize)
    })
  }
}
