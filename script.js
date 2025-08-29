const toDoItemsElem = document.getElementsByClassName('toDoItems')[0];
const inputElem = document.getElementById('userInput');
const trashIconElem = document.getElementById('trash');

inputElem.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addItem();
    }
});

function addItem() {
    let divParent = document.createElement('div');
    let divChild = document.createElement('div');
    let checkIcon = document.createElement('i');
    let trashIcon = document.createElement('i');

    divParent.className = 'item';
    divParent.innerHTML = '<div>' + inputElem.value + '</div>';

    checkIcon.className = 'fas fa-check-square';
    checkIcon.style.color = 'lightgray';
    checkIcon.addEventListener('click', function () {
        if (checkIcon.style.color == 'limegreen') {
            checkIcon.style.color = 'lightgray';
            divParent.style.textDecoration = 'none';
            divParent.style.color = '#454545';
        } else {
            checkIcon.style.color = 'limegreen';
            divParent.style.textDecoration = 'line-through';
            divParent.style.color = 'limegreen';

        }
    })

    divChild.appendChild(checkIcon);

    trashIcon.className = 'fas fa-trash';
    trashIcon.style.color = 'darkgray';
    trashIcon.addEventListener('click', function () {
        divParent.remove();
    })

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    toDoItemsElem.appendChild(divParent);

    inputElem.value = '';

}