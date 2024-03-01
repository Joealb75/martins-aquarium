import { getFish } from './database.js'
import { getLocation } from './database.js'
import { getTravelTips } from './database.js'

const allFish = getFish()
const allLocations = getLocation()
const allTravelTips = getTravelTips()


for (const fish of allFish) {
    console.log(fish)
}

for (const location of allLocations) {
    console.log(location)
}

for (const tip of allTravelTips) {
    console.log(tip)
}