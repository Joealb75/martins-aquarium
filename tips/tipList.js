import {getTravelTips} from "../scripts/database.js";

export const tipList = () => {

    const tips = getTravelTips()

    let htmlString = ""

    for (const tip of tips) {
        htmlString += `
        
        <section class="fishing__tip">  
            <div>${tip.tip}</div>

         `
    }
    htmlString += `</section>`

    return htmlString
}