const maxItems = 10;
const addButton = document.getElementById('add');
const warning = document.getElementById('warning');
const addItem = document.getElementById('add-item');
const list = document.getElementById('list');
addButton.onclick = function(e) {
    let items = Array.from(document.getElementsByTagName('li'));
    if (items.length === maxItems) {
        addButton.classList.add('disabled');
        warning.style.display = 'flex';
        e.preventDefault();
        addItem.value = '';
        addItem.setAttribute('disabled', 'disabled');
    } else if (addItem.value !== '') {
        warning.style.display = 'none';
        let item = document.createElement('li');
        item.classList.add('list-item');
        item.innerHTML = `<div>					
					<input type="checkbox" id="newForCat" name="newForCat">
					<label for="newForCat">${addItem.value}</label>
					<button onclick="changeLabel()"><i class="material-icons">edit</i></button>
				</div>
				<button><i class="material-icons">delete</i></button>`;
        list.appendChild(item);
        addItem.value = '';
    }
}

function changeLabel(){
	let editElement = document.getElementsByTagName('label')[1];
	editElement.innerHTML = `<input type="text" id="save">
							<button onclick="saveNewLabel()"><i class="material-icons">save</i></button>`;
}
function saveNewLabel(){
	let saveElement = document.getElementById('save').value;
	document.getElementsByTagName('label')[1].innerHTML = saveElement; 
}