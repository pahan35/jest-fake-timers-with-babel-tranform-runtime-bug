import ThingWithTimers from './ThingWithTimers'

jest.useFakeTimers()

test('fake timers are used', async () => {
  const thingWithTimers = new ThingWithTimers()
  const promiseWithTimer = thingWithTimers.delayViaInterval(3500, 350)
  jest.advanceTimersByTime(5000)
  await expect(promiseWithTimer).resolves.toBeUndefined()
})

test('just simple wait to check uncleared interval from previous test', async () => {
  function waitFor(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, ms)
    })
  }
  const waitPromise = waitFor(4500)
  jest.advanceTimersByTime(5000)
  await expect(waitPromise).resolves.toBeUndefined()
})
