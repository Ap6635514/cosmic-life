// src/services/moon.js

export async function getMoonPhase() {

  try {

    return {
      Phase: "Waxing Crescent"
    }

  } catch (error) {

    console.error(error)

    return null

  }

}