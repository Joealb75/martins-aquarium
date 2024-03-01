
const database = {
    fish: [
        {
            id: 1,
            name: "Salmon",
            species: "Atlantic Salmon",
            food: "Small fish, shrimp, insects",
            length: 30, // in inches
            harvestedFrom: "Atlantic Ocean",
            fishImage: "https://evolution.berkeley.edu/wp-content/uploads/2022/05/Atlantic_Salmon-Atlanterhavsparken_Norway.jpg"  
        
        },
        {
            id: 2,
            name: "Tuna",
            species: "Yellowfin Tuna",
            food: "Small fish, squid, crustaceans",
            length: 60, // in inches
            harvestedFrom: "Pacific Ocean",
            fishImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQakH0YdEzvKHFywj69iClZT-EF6V2IjANEpA&usqp=CAU"  
        },
        {
            id: 3,
            name: "Cod",
            species: "Atlantic Cod",
            food: "Small fish, crustaceans, squid",
            length: 40, // in inches
            harvestedFrom: "North Atlantic Ocean",
            fishImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqnpsmHrb01eSxfr1DJKJhCmZfndpJlRuHA&usqp=CAU"  
        },
        {
            id: 4,
            name: "Trout",
            species: "Rainbow Trout",
            food: "Insects, small fish, crustaceans",
            length: 20, // in inches
            harvestedFrom: "Freshwater streams and lakes",
            fishImage: "https://t3.ftcdn.net/jpg/05/71/75/50/360_F_571755069_zmb9ey9o049PT5YwJpty0wPIZuSnU2wd.jpg"  
        },
        {
            id:5,
            name: "Sardine",
            species: "European Pilchard",
            food: "Plankton, small fish",
            length: 8, // in inches
            harvestedFrom: "Mediterranean Sea",
            fishImage: "https://a-z-animals.com/media/sardine-3.jpg"
        },
        {
            id: 6,
            name: "Mackerel",
            species: "Atlantic Mackerel",
            food: "Small fish, crustaceans, squid",
            length: 18, // in inches
            harvestedFrom: "Atlantic Ocean",
            fishImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkmcNTPlHSSN6BSbB6X8_XTq2DbMW3yRpQZBN3-gnvW03vbqrdgqgiOs1rKv7UNHAkt1w&usqp=CAU"
        }
    ],

    locations:[
        {   
            id: 1,
            dateOfVisit: "March 15, 2021",
            location: "New York, USA",
        },
        {   
            id: 2,
            dateOfVisit: "July 7, 2023",
            location: "Honolulu, Hawaii",
        },
        {   
            id: 3,
            dateOfVisit: "November 22, 2021",
            location: "Reykjavik, Iceland",
        },
        {   
            id: 4,
            dateOfVisit: "April 9, 2022",
            location: "Lake Tahoe, California",
        },
        {   
            id: 5,
            dateOfVisit: "September 3, 2023",
            location: "Barcelona, Spain",
        },
        {   
            id: 6,
            dateOfVisit: "December 28, 2023",
            location: "New York, USA",
        },
    ],

    travelTips:[
        {
            id: 1,
            tip: `Venture to the Salmon River in upstate New York for world-renowned salmon fishing. 
            During the fall spawning season, anglers flock to the riverbanks to hook into massive Atlantic salmon as they make their annual journey upstream.`
        },
        {
            id: 2,
            tip: `Embark on a thrilling deep-sea fishing excursion off the coast of Honolulu to target the legendary yellowfin tuna. 
            With its warm tropical waters and abundance of baitfish, Hawaii offers prime conditions for landing trophy-sized tuna that will test your angling skills to the limit.`
        },
        {
            id: 3,
            tip: `Experience the thrill of cod fishing in the frigid waters of the North Atlantic off the coast of Reykjavik. 
            Join a local fishing charter and drop your line to the depths below, where you'll have the chance to reel in hefty Atlantic cod while surrounded by Iceland's stunning coastal scenery.`
        },
        {
            id: 4,
            tip: ` Escape to the serene waters of Lake Tahoe for some world-class rainbow trout fishing. 
            Whether you prefer fly fishing in mountain streams or trolling the deep blue depths of the lake, Lake Tahoe offers anglers ample opportunities to hook into beautiful rainbow trout against the backdrop of the Sierra Nevada mountains.`
        },
        {
            id: 5,
            tip: `Explore the vibrant fishing culture of Barcelona's Mediterranean coastline, where you can join local fishermen on traditional fishing boats known as "llauts" to catch European pilchard and other native species. 
            After a day on the water, savor the flavors of fresh seafood at one of Barcelona's bustling fish markets or seaside restaurants.`
        },
        {
            id: 6,
            tip: `Enjoy a day of mackerel fishing off the coast of Long Island, where Atlantic mackerel migrate in large schools during the summer months. 
            Charter a boat from one of New York's many coastal marinas and drop your line for these fast-swimming, hard-fighting fish that are prized for their delicious flavor and firm texture.`
        },
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getLocation = () => {
    return database.locations.map(locations => ({...locations}))
}

export const getTravelTips = () => {
    return database.travelTips.map(travelTips => ({...travelTips}))
}