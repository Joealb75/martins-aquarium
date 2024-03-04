import { getLocation } from "../scripts/database.js"

export const locationList = () => {

    const location = getLocation()

    let htmlString = ""

    for (const loc of location) {
        htmlString += `
        
        <section class="locations">  
            <div>${loc.dateOfVisit}</div>
            <div>${loc.location}</div>

         `
    }
    htmlString += `</section>`

    return htmlString
}