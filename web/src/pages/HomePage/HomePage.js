import { useState } from 'react'
import { Form, TextField, Submit } from '@redwoodjs/forms'

const HomePage = () => {
  const [weather, setWeather] = useState()

  const onSubmit = (data) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${data.zip},us&appid=1e4189a3dcc8473ac313e7ce4c761751`
    )
      .then((response) => response.json())
      .then((json) => setWeather(json))
  }

  const temp = () => Math.round(((weather.main.temp - 273.15) * 9) / 5 + 32)

  const condition = () => weather.weather[0].main

  const icon = () => {
    return `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <TextField
          name="zip"
          placeholder="Zip code"
          maxLength="5"
          validation={{ required: true, pattern: /^\d{5}$/ }}
        />
        <Submit>Go</Submit>
      </Form>
      {weather && (
        <section>
          <h1>{weather.name}</h1>
          <h2>
            <img src={icon()} style={{ maxWidth: '2rem' }} />
            <span>
              {temp()}°F and {condition()}
            </span>
          </h2>
        </section>
      )}
    </>
  )
}

export default HomePage
