// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.

      /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
   
   const missionTarget = document.getElementById("missionTarget");
   
   missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
   `;
}

function validateInput(testInput) {
   if (testInput === "") {
    return "Empty";
   } else if (isNaN(testInput)) {
    return "Not a Number";
   } else {
    return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    const launchStatus = document.getElementById("launchStatus");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        window.alert("All fields are required");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" || fuelLevel < 0 || cargoLevel < 0) {
        window.alert("Please enter valid information for each field");
    } else {
        let ready = true;

        list.style.visibility = "visible"; 

        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    
        if (fuelLevel < 10000) { 
            fuelStatus.innerHTML = `Fuel level too low for launch`; 
            ready = false; 
            //launchStatus.style.color = "red";
        } else {
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
        }
     
        if (cargoLevel > 10000) { 
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`; 
            ready = false;
            //launchStatus.style.color = "rgb(199, 37, 78)";
        } else {
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
        }
    
        if (!ready) {
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
            launchStatus.style.color = "rgb(199, 37, 78)";
        } else {
            launchStatus.innerHTML = `Shuttle is Ready for Launch`;
            launchStatus.style.color = "rgb(65, 159, 106)";
        }
    }   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
