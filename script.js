const SERVER_URL = "http://localhost:3000"
const animalsDiv = document.getElementById("animals")




function getAnimals(){
        fetch(SERVER_URL + "/animals").then((response)=> response.json())
        .then((animals) => displayAnimals(animals))
        .catch((error) => console.log(error))
        //data is generic. it should be animals in this case
}

function displayAnimals(animals){
 
console.log(animals)
   for (animal of animals){
       let name = document.createElement("h3")
       name.innerHTML = animal.name
       animalsDiv.appendChild(name)
       let info = document.createElement("p")
       info.innerHTML = animal.kind + ", " + animal.age +"," + animal.description
       animalsDiv.appendChild(info)
   }
}


getAnimals()