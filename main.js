
const uuidv4 = require('uuid/v4')

document.querySelector("#randomizer").addEventListener('click',function(event){
    console.log("RANDOMIZING")
    event.preventDefault()
    // spinTheWheel()
})
document.querySelector(".content").addEventListener('click',function(event){
    if(event.target.matches("h2")){
        toggleHide(event.target)
    }
})

function spinTheWheel(){
// Look at our list of 'active options'. call a random number based on the length of the list and choose a random index from the list. hold onto that index so that the same option isn't randomly selected twice in a row
    
}
function moveToActive(){
// When an element in the inactive options is clicked on (event listener), patch it in the api so that it belongs to the other list, then repopulate our lists.
}
function moveToInactive(){
// When an element in the active options is clicked on, patch it in the api so that it belongs to the other list, then repopulate.
}
function populateLists(){
// Make a GET call to our api, and generate html for our active and inactive lists.
}
function deleteElement(){
// When an element in the inactive options is right-clicked, send a DELETE.
}
function addElement(){
// Generate a new uuid and add the newly created element to our active options list.
}
function toggleHide(node){
    console.log(node)
    console.log(node.childNodes)
    node.parentNode.childNodes[5].classList.toggle("hidden")
}