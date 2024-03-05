import { getLocation } from "../scripts/database.js"
import { getFish } from "../scripts/database.js"

export const locationList = () => {

    const location = getLocation()
    const allFish = getFish()

    let htmlString = `
    <section class="location__head">
        <h1>Fishing Locations</h1>
        
    `

    for (const loc of location) {
    
        for (const fish of allFish) {
            if (fish.id === loc.id)
        
            htmlString += `
            
            <div class="locations">  
                <ul>
                    <div class = "location__fishName"><b>${fish.name}</b></div>
                    <li>${loc.dateOfVisit}</li>
                    <div>${loc.location}</div>
                </ul>
            </div>
            `
        }}
        htmlString += `</section>`
    
        return htmlString
    
}






    // export const locationList = () => {

    //     const location = getLocation()
    //     const allFish = getFish()
    
    //     let htmlString = `
    //     <section class="location__head">
    //         <h1>Fishing Locations</h1>
            
    //     `
    
    //     for (const loc of location) {
    //         htmlString += `
            
    //         <div class="locations">  
    //             <ul>
    //                 <li>${loc.dateOfVisit}</li>
    //                 <div>${loc.location}</div>
    //             </ul>
    //         </div>
    //          `
    //     }
    //     htmlString += `</section>`
    
    //     return htmlString
        
    // }