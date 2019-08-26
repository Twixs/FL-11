const body = document.getElementById('body');
const URL = 'https://jsonplaceholder.typicode.com';
const USERS = 'https://jsonplaceholder.typicode.com/users';
const xhr = new XMLHttpRequest();

async function fetchJSON(url) {
	try {
		startSpinner();
		const request = await fetch(url);
		const text = await request.json();
		displayHTML(text);
		endSpinner();
	}
	catch (err) {
		console.log('Failed on', err);
		startSpinner();
	}
}
fetchJSON(USERS);


function displayHTML(json) {
	const array = [];
		for (let i = 0; i < json.length; i++) {
			const list = document.createElement('ul');
			let id = 'list-' + i;
			list.setAttribute("id", id);
			body.appendChild(list);
			array[i] = json[i];
			let thisObject = array[i];
			for (let key in thisObject) {
				if (key === 'address') {
					let address = thisObject.address;
					let childCity = document.createElement('li');
					childCity.textContent = 'city: ' ;
					let inputCity = document.createElement('p');
					inputCity.innerHTML = address['city'];
					list.appendChild(childCity);
					childCity.appendChild(inputCity);
					let childStreet = document.createElement('li');
					childStreet.textContent = 'street: ';
					let inputStreet = document.createElement('p');
					inputStreet.innerHTML = address['street'];
					list.appendChild(childStreet);
					childStreet.appendChild(inputStreet);
					let childSuite = document.createElement('li');
					childSuite.textContent = 'suite: ';
					let inputSuite = document.createElement('p');
					inputSuite.innerHTML = address['suite'];
					list.appendChild(childSuite);
					childSuite.appendChild(inputSuite);
				} else {
					if (key === 'company') {
						let company = thisObject.company;
						let childName = document.createElement('li');
						childName.textContent = 'company name: ';
						let inputName = document.createElement('p');
						inputName.innerHTML = company['name'];
						list.appendChild(childName);
						childName.appendChild(inputName);
						let childBs = document.createElement('li');
						childBs.textContent = 'bs: ' ;
						let inputBs = document.createElement('p');
						inputBs.innerHTML = company['bs'];
						list.appendChild(childBs);
						childBs.appendChild(inputBs);
						let childPhrase= document.createElement('li');
						childPhrase.textContent = 'catchPhrase: ';
						let inputPhrase = document.createElement('p');
						inputPhrase.innerHTML = company['catchPhrase'];
						list.appendChild(childPhrase);
						childPhrase.appendChild(inputPhrase);
					} else {
							let newChild = document.createElement('li');
							newChild.textContent = key + ': ';
							let childValue = document.createElement('p');
							childValue.innerHTML = thisObject[key];
							list.appendChild(newChild);
							newChild.appendChild(childValue);		
						}
					}
				
			}
			const btn = document.createElement('button');
			btn.setAttribute('type', 'submit');
			let btnClass = id;
			btn.setAttribute("class", btnClass);
			btn.setAttribute("id", 'edit');
			btn.textContent = 'Edit';
			list.appendChild(btn);

			const deleteBtn = document.createElement('button');
			deleteBtn.setAttribute("type", "submit");
			deleteBtn.setAttribute("class", btnClass);
			deleteBtn.setAttribute("id", 'del');
			deleteBtn.textContent = 'Delete';
			list.appendChild(deleteBtn);
		}
		
		let parentNode = document.querySelectorAll('ul');
			for (var j = 0; j < parentNode.length; j++) {
				let child = parentNode[j].querySelectorAll('li');
				let text = child[1].querySelector('p').innerHTML;
				child[1].querySelector('p').innerHTML = `<a id="${j}">${text}</a>`;
			}

	addListeners();
}


function addListeners(){
	let readyToEdit = document.querySelectorAll('#edit');
	readyToEdit.forEach(function(item) {
		item.addEventListener("click", function() {
		editUser(item.className);
	})
	})

	let readyToDelete = document.querySelectorAll('#del');
	readyToDelete.forEach(function(item) {
		item.addEventListener("click", function() {
		deleteUser(item.className);
	})
	})

	let redirect = document.querySelectorAll('a');
	redirect.forEach(function(item) {
		item.addEventListener("click", function() {
			showPostsAndComments(item.id);
		})
	})
}


function editUser(className) {
	let getList = document.getElementById(className);
	let getElem = getList.querySelectorAll('p');
	for (var i = 0; i < getElem.length; i++) {
		let tempMemo = getElem[i].innerHTML;
		let childValue = document.createElement('input');
		childValue.value = tempMemo;
		getElem[i].innerHTML = '';
		getElem[i].value = getElem[i].appendChild(childValue);
	}

	const removeBtn = getList.querySelector('#edit');
	removeBtn.style.display ='none';
	let save = document.createElement('button');
	save.setAttribute("type", "submit");
	let btnClass = className;
	save.setAttribute("class", btnClass);
	save.setAttribute("id", 'save');
	save.textContent = 'Save';
	getList.appendChild(save);

	save.addEventListener("click", saveData);
}


function saveData() {
	startSpinner();
	let data = [];
	let currentObject = this.className;
	const getList = document.getElementById(currentObject);
	const getElem = getList.querySelectorAll('input');
	for (var i = 0; i < getElem.length; i++) {
		let tempMemo = getElem[i].value;
		data[i] = getElem[i].value;
		let getOuterElem = getList.querySelectorAll('p');
		getOuterElem[i].textContent = data[i];
	}

	const removeBtn = getList.querySelector('#save');
	removeBtn.style.display ='none';
	const btn = getList.querySelector('#edit');
	btn.style.display ='block';


	let prepRequest = {};
	let keys = ['id', 'name', 'username', 'email', 'city',
	'street', 'suite', 'phone', 'website'];
	prepRequest['id'] = data[0];
	prepRequest['name'] = data[1];
	prepRequest['username'] = data[2];
	prepRequest['email'] = data[3];
	prepRequest['city'] = data[4];
	prepRequest['street'] = data[5];
	prepRequest['suite'] = data[6];
	prepRequest['phone'] = data[7];
	prepRequest['website'] = data[8];
	let convertToJSON = JSON.stringify(prepRequest);


	let ID = this.className.toString().slice(-1);
	xhr.open("PUT", USERS +`/${++ID}`, true);
	xhr.onload = function () {
		let users = JSON.parse(xhr.responseText);
		if (xhr.readyState == 4 && xhr.status == "200") {
			console.log(`Changes are saved for the user with id ${ID}`);
		} else {
			console.error(`Failed to edit user with id ${ID}`);
		}
	}
	xhr.send(convertToJSON);
	endSpinner();
}


function deleteUser(className) {
	startSpinner();
	let ID = className.toString().slice(-1);
	xhr.open("DELETE", USERS +`/${ID}`, true);
	xhr.onload = function () {
		let user = JSON.parse(xhr.responseText);
		if (xhr.readyState == 4 && xhr.status == 200) {
			console.log(`User with id ${ID} has been deleted`);
		} else {
			console.error(`Failed to delete user with id ${ID}`);
		}
	}
	xhr.send();
	let child = document.getElementById(className);
	child.style.display = 'none';
	endSpinner();
}

async function showPostsAndComments(id){
	startSpinner();
	const urlPosts = URL +`/posts?userId=${++id}`;
	const postsRequest = await fetch(urlPosts);
	const postsText = await postsRequest.json();
	displayPosts(postsText);
	

	endSpinner();
}

async function displayPosts(text) {
	let newWin = window.open();
	let html = '<html><head></head><body></body></html>';
	let thisWindow = newWin.document;
	thisWindow.write(html);

	for (let i = 0; i < text.length; i++) {
		let currentPost = text[i];
		let addPost = thisWindow.createElement('div');
		addPost.innerHTML = `<h3>Post #${text[i].id} </h3><br>`;
		thisWindow.write(thisWindow.body.appendChild(addPost).innerHTML);
		for (let key in currentPost) {
			let addElem = thisWindow.createElement('p');
			addElem.innerHTML = `${key}: ${currentPost[key]}`;
			thisWindow.write(addPost.appendChild(addElem).innerHTML);
			thisWindow.write('<br>');
		}
		getComments(text[i].id, thisWindow);
		thisWindow.write('<hr>');
	}
	
}

async function getComments(postID, thisWindow) {
	let urlComments = URL +`/comments?postId=${postID}`;
	const commentsRequest = await fetch(urlComments);
	const commentsText = await commentsRequest.json();
	displayComments(commentsText, postID, thisWindow);
}

function displayComments(text, postID, thisWindow) {
	for (let i = 0; i < text.length; i++) {
		let addComment = thisWindow.createElement('div');
		addComment.innerHTML = `<h3>Comments to Post #${postID} </h3><br>`;
		thisWindow.write(thisWindow.body.appendChild(addComment).innerHTML);
		let currentComment = text[i];
		let addElem1 = thisWindow.createElement('p');
		addElem1.innerHTML = `email: ${currentComment['email']} <br>`;
		thisWindow.write(addComment.appendChild(addElem1).innerHTML);
		let addElem2 = thisWindow.createElement('p');
		addElem2.innerHTML = `name: ${currentComment['name']} <br>`;
		thisWindow.write(addComment.appendChild(addElem2).innerHTML);
		let addElem3 = thisWindow.createElement('p');
		addElem3.innerHTML = `comment: ${currentComment['body']} <br>`;
		thisWindow.write(addComment.appendChild(addElem3).innerHTML);
	}
	thisWindow.write('<hr>');
}

function startSpinner() {
	let spinner = document.querySelector('.lds-dual-ring');
	spinner.style.display = 'block';
}

function endSpinner() {
	let spinner = document.querySelector('.lds-dual-ring');
	spinner.style.display = 'none';
}