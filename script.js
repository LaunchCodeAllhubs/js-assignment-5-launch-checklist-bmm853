// Write your JavaScript code here!

//const { addDestinationInfo } = require("./scriptHelper");

//const { pickPlanet } = require("./scriptHelper");

//const { myFetch } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

    const faultyItems = document.getElementById("faultyItems");
    const pilotName = document.querySelector("input[name=pilotName]");
    const copilotName = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoMass = document.querySelector("input[name=cargoMass]"); 
    
    formSubmission(document, faultyItems, pilotName, copilotName, fuelLevel, cargoMass);

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let chosenPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image);
   })
   
});