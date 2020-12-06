// Modal Logic // 
//Selecting the modal button, close button and the actual modal 
let modal = document.getElementById('modal');
let modalBtn = document.getElementById('learn');
let closeModal = document.getElementById('close-modal');

//Displaing the modal
modalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
})

//Closing the modal
closeModal.addEventListener('click', function() {
    modal.style.display = 'none'
})

let lang = document.getElementById('lng');
let dropdownMenu = document.querySelector(".dropdown");
let closeDropdown = document.querySelector(".dropdown i");

lang.addEventListener('click', function() {
    dropdownMenu.style.display = 'block';
})
closeDropdown.addEventListener('click', function() {
    dropdownMenu.style.display = 'none';
})