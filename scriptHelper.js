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
    const form = document.querySelector("form");
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    const launchStatus = document.getElementById("launchStatus");

    form.addEventListener("submit", function(event) {
        if (validateInput(pilot.value) === "Empty" || validateInput(copilot.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoLevel.value) === "Empty") {
            alert("All fields are required");
            event.preventDefault();
        } else if (validateInput(pilot.value) === "Is a Number" || validateInput(copilot.value) === "Is a Number" || validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoLevel.value) === "Not a Number") {
            alert("Please enter valid information for each field");
            event.preventDefault();
        } else {
            let ready = true;

            list.style.visibility = "visible"; 

            pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
    
            if (fuelLevel.value < 10000) { 
                fuelStatus.innerHTML = "Fuel level too low for launch"; 
                ready = false; 
                //launchStatus.style.color = "red";
            } else {
                fuelStatus.innerHTML = "Fuel level high enough for launch";
            }
     
            if (cargoLevel.value > 10000) { 
                cargoStatus.innerHTML = "Cargo mass too heavy for launch"; 
                ready = false;
                //launchStatus.style.color = "rgb(199, 37, 78)";
            } else {
                cargoStatus.innerHTML = "Cargo mass low enough for launch";
            }
    
            if (!ready) {
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.style.color = "rgb(199, 37, 78)";
            } else {
                launchStatus.innerHTML = "Shuttle is Ready for Launch";
                launchStatus.style.color = "rgb(65, 159, 106)";
            }
    
            event.preventDefault();
        }   
   });
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
