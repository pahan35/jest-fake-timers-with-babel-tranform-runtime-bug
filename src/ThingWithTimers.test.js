import ThingWithTimers from './ThingWithTimers'

jest.useFakeTimers()

test('fake timers are used', async () => {
  const thingWithTimers = new ThingWithTimers()
  const promiseWithTimer = thingWithTimers.delayViaInterval(3500, 350)
  jest.advanceTimersByTime(5000)
  await expect(promiseWithTimer).resolves.toBeUndefined()
})
