export default class ThingWithTimers {
  delayViaInterval(callAfter, intervalSize) {
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
