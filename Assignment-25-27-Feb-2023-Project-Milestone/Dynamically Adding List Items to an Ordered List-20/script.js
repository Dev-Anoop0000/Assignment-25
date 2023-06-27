const list = document.getElementById('list');
const addButton = document.getElementById('addButton');

let currentIndex = 0;

const listItemArray = ['HTML 1', 'CSS 2', 'JavaScript 3', 'Boostrap 4', 'MySQL 5', 'MongoDB 6', 'NodeJS 7'];


function addListItem() {
    // Check if there are remaining items in the array
    if (currentIndex < listItemArray.length) {
        const newItem = document.createElement('li');
        newItem.textContent = listItemArray[currentIndex];
        list.appendChild(newItem);
        currentIndex++;
    } else {
        // Display a message when all items have been added
        alert('All items have been added!');
    }
}

// Add event listener to the button
addButton.addEventListener('click', addListItem);