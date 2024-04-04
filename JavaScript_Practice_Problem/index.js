var addBtn = document.getElementById("add-btn");
var list = document.getElementById("list");
var userInput = document.getElementById('task');

var currentInputValue = '';

userInput.addEventListener('input', function(e) {
    currentInputValue = e.target.value;
});

userInput.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
        addListItem();
    }
});

function deleteListItem(id) {
    var listItem = document.getElementById(`${id}`);
    list.removeChild(listItem);
}


function addListItem() {
    if(currentInputValue !== undefined && currentInputValue !== null && currentInputValue !== '') {
        var newListElement = document.createElement('li');
        var textNode = document.createTextNode(currentInputValue);
        var deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fa-solid');
        deleteIcon.classList.add('fa-trash');
        deleteIcon.classList.add('delete-icon');
        newListElement.appendChild(textNode);
        newListElement.appendChild(deleteIcon);
        newListElement.id = "item" + (list.childElementCount + 1);
        list.appendChild(newListElement);
        deleteIcon.addEventListener('click', function() {
            deleteListItem(newListElement.id);
        });
        userInput.value = '';
        currentInputValue = '';
    } else {
        alert("Please enter a valid Todo item!")
    }
    
}


addBtn.addEventListener('click', addListItem);

