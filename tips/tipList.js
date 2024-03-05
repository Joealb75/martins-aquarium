import {getTravelTips} from "../scripts/database.js";
import { getFish } from "../scripts/database.js"

export const tipList = () => {

    const tips = getTravelTips()
    const allFish = getFish()

    let htmlString = `
    <section class="tips__head">
        <h1>Fishing Tips</h1>
    `

    for (const tip of tips) {
        for (const fish of allFish) {
            if (fish.id === tip.id)
            htmlString += ` 
            <div class="fishing__tip"> 
                <ul>
                <div><b>Tip for ${fish.name}</b></div>
                    <li>
                        ${tip.tip}
                    </li>
                </ul>
            </div>    

            `
        }}
    htmlString += `</section>`

    return htmlString
}