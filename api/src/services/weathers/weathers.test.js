import { weathers, weather, deleteWeather } from './weathers'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('weathers', () => {
  scenario('returns all weathers', async (scenario) => {
    const result = await weathers()

    expect(result.length).toEqual(Object.keys(scenario.weather).length)
  })

  scenario('returns a single weather', async (scenario) => {
    const result = await weather({ id: scenario.weather.one.id })

    expect(result).toEqual(scenario.weather.one)
  })

  scenario('deletes a weather', async (scenario) => {
    const original = await deleteWeather({ id: scenario.weather.one.id })
    const result = await weather({ id: original.id })

    expect(result).toEqual(null)
  })
})
