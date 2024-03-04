// Import the function that returns a copy of the fish array
import { getFish } from '../scripts/database.js'


export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()
    

    // Start building a string filled with HTML syntax
    let htmlString = ""

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `
            <section class="fishCard"><pre>
                <div><img  class="fish__image image--card" src="${fish.fishImage}" /></div>
                <div class="fish__name">This is a ${fish.name}</div>
                <div class="fish__species">It is part of the ${fish.species} Species</div>
                <div class="fish__length">It is ${fish.length} Inches Long </div>
                <div class="fish__location">We harvested the fish from ${fish.harvestedFrom}</div>
                <div class="fish__diet">The ${fish.name} eats ${fish.food}</div>
            </section></pre>
`
    }
    htmlString += `</article>`

    return htmlString
}