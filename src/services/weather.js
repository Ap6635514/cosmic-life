// src/services/weather.js

const API_KEY = "76e7c148b61f0fa7e8e6eea32f8f33bc"

export async function getWeather() {

  try {

    const response = await fetch(

      `https://api.openweathermap.org/data/2.5/weather?q=Mumbai&units=metric&appid=${API_KEY}`

    )

    const data = await response.json()

    return data

  } catch (error) {

    console.error(error)

    return null

  }

}