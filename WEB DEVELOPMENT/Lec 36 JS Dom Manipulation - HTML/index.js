let mydiv = document.querySelector('#mydiv');

// let newElement = document.createElement('span');
// newElement.textContent = "Vaibhav Dutta";

// mydiv.insertAdjacentElement('afterend', newElement);

let parent = document.querySelector('#mydiv');
let child = document.querySelector('#fpara');
parent.removeChild(child);