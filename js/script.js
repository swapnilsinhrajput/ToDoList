const inputBox = document.getElementById('inputBox');
const listContainer = document.getElementById('listContainer');
const clearButton = document.getElementById('clearButton');


function updateClearButtonVisibility() {
    clearButton.style.display = listContainer.children.length > 0 ? 'block' : 'none';
}
function addTask() {
    const task = inputBox.value;
    if (task) {
        const listItem = document.createElement('LI');
        listItem.innerText = task;
        listContainer.appendChild(listItem);
        inputBox.value = '';
        let span = document.createElement('SPAN');
        span.innerHTML = '\u00d7';
        listItem.appendChild(span);
        saveData()
        updateClearButtonVisibility();
    } else {
        alert('Please enter a task');
    }
}
inputBox.addEventListener('keypress',function (e){
    if (e.key === "Enter"){
        addTask();
    }
})
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData()
    } else if (e.target.tagName === 'SPAN') {
        let div = e.target.parentNode;
        div.remove();
        saveData()
        updateClearButtonVisibility();
    }
})

function clearList() {
    listContainer.innerHTML = ''; // Clear the list
    updateClearButtonVisibility();
    saveData();
}

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
    updateClearButtonVisibility();
}
showTask();


