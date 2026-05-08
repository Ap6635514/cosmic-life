// src/services/iss.js

export async function getISSLocation() {

  try {

    const response = await fetch(
      "https://api.wheretheiss.at/v1/satellites/25544"
    )

    const data = await response.json()

    return data

  } catch (error) {

    console.error(error)

    return null

  }

}