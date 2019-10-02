
const uuidv4 = require('uuid/v4')

document.querySelector("#randomizer").addEventListener('click', function (event) {
    console.log("RANDOMIZING")
    event.preventDefault()
    spinTheWheel()
})
document.querySelector(".content").addEventListener('click', function (event) {
    if (event.target.matches("h2")) {
        toggleHide(event.target)
    }
})
document.querySelector(".add").addEventListener('submit', function (event) {
    event.preventDefault()
})
let prevIndex = undefined
function spinTheWheel() {
    // Look at our list of 'active options'. call a random number based on the length of the list and choose a random index from the list. hold onto that index so that the same option isn't randomly selected twice in a row. Then, update our result div according to the result.
    let resultDiv = document.querySelector(".result")
    let options = document.querySelectorAll(".active")
    if (options.length > 0) {
        choose(options,prevIndex, resultDiv)
    } else {
        resultDiv.innerHTML = `<h3>Gonna need some options if you want me to choose</h3>`
    }
    function moveToActive(node) {
        // When an element in the inactive options is clicked on (event listener), patch it in the api so that it belongs to the other list, then repopulate our lists.

    }
    function moveToInactive(node) {
        // When an element in the active options is clicked on, patch it in the api so that it belongs to the other list, then repopulate.
    }
    function populateLists() {
        // Make a GET call to our api, and generate html for our active and inactive lists.
        
    }
    function generateList(options){
        // Map the contents of our options objects into the html for a list, which we will then join with newlines.
        return options.map(option => {
            `<li class="active" data-id=${option.id}>${option.name}</li>`
        }).join("\n")

    }
    function deleteElement(node) {
        // When an element in the inactive options is right-clicked, send a DELETE.

    }
    function addElement(name) {
        // Generate a new uuid and add the newly created element to our active options list.
    }
    function toggleHide(node) {
        node.parentNode.childNodes[5].classList.toggle("hidden")
    }
    function choose(array, prevIndex, resultDiv) {
        let choice = Math.floor(Math.random() * array.length)
        if (choice !== prevIndex) {
            prevIndex = choice
            resultDiv.innerHTML = `<h3>I think you should ${options[choice].textContent}!</h3>`
        } else {
            choose(array, prevIndex, resultDiv)
        }
    }
}