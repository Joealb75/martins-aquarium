import { FishList } from '../fish/FishList.js'
import { locationList } from '../locations/locations.js'
import { tipList } from '../tips/tipList.js'
import { mostHolyFish } from '../fish/filterFish.js'
import { soldierFish } from '../fish/filterFish.js'
import { nonHolyFish } from '../fish/filterFish.js'

const allFish = FishList()
const location = locationList()
const travelTips = tipList()
mostHolyFish()
soldierFish()
nonHolyFish()



// for (const fish of allFish) {
//     console.log(fish)
// }

// for (const location of allLocations) {
//     console.log(location)
// }

// for (const tip of allTravelTips) {
//     console.log(tip)
// }

const parentHTMLElement = document.querySelector(".fishList")

parentHTMLElement.innerHTML = allFish

parentHTMLElement.innerHTML += travelTips

parentHTMLElement.innerHTML += location

// parentHTMLElement.innerHTML += holyFish