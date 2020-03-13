import ThingWithTimers from './ThingWithTimers'

jest.mock('./constants', () => ({
  ...jest.requireActual('./constants'),
  WAIT_FOR: 15,
  WAIT_INTERVAL: 5,
}))

test('fake timers are used', async () => {
  const thingWithTimers = new ThingWithTimers()
  const promiseWithTimer = thingWithTimers.delayViaInterval()
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
  await expect(waitPromise).resolves.toBeUndefined()
})
