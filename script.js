let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}
Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? 'read already' : 'not read yet'}`;
};

function addBookToLibrary(book) {
    myLibrary.push(book);
    return myLibrary.length;
}

// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
// const nineteenEightyFour = new Book('1984', 'George Orwell', 298, true);
// const oneHundredYearsOfSolitude = new Book('One Hundred Years of Solitude', 'Gabriel Garcia Marquez', 417, true);
// addBookToLibrary(theHobbit);
// addBookToLibrary(nineteenEightyFour);
// addBookToLibrary(oneHundredYearsOfSolitude);

const opener = document.getElementById('opener');
opener.onclick = function() {
    const lightbox = document.getElementById('lightbox');

    const dimmer = document.createElement('div');
    dimmer.style.width = window.innerWidth + 'px';
    dimmer.style.height = window.innerHeight + 'px';
    dimmer.id = 'dimmer';
    dimmer.onclick = function() {
        document.body.removeChild(this);
        lightbox.style.visibility = 'hidden';
    }
    document.body.appendChild(dimmer);

    lightbox.style.visibility = 'visible';
    lightbox.style.top = window.innerHeight/2 - 320 + 'px';
    lightbox.style.left = window.innerWidth/2 - 120 + 'px';
    return false;
}

// document.getElementById('form').onsubmit = function() {
document.getElementById('btn-submit').onclick = function() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const itsRead = document.getElementById('read').checked;
    const book = new Book(title, author, pages, itsRead);
    addBookToLibrary(book);
    const index = title;
    document.getElementById('form').reset();

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.id = index;
    const titleDiv = document.createElement('div');
    titleDiv.className = 'title';
    titleDiv.appendChild(document.createTextNode(book.title));
    const authorDiv = document.createElement('div');
    authorDiv.className = 'author';
    authorDiv.appendChild(document.createTextNode(book.author));
    const pagesDiv = document.createElement('div');
    pagesDiv.className = 'pages';
    pagesDiv.appendChild(document.createTextNode(`${book.pages} pages`));

    const btnRead = document.createElement('button');
    btnRead.className = `btn-${itsRead ? 'read' : 'unread'}`;
    btnRead.id = index;
    btnRead.appendChild(document.createTextNode(`${itsRead ? 'Read' : 'Not Read'}`));

    btnRead.addEventListener('click', function() {
        const index = btnRead.id;
        const findBook = (element) => element.title === index;
        const arrayIndex = myLibrary.findIndex(findBook);
        if (btnRead.className === 'btn-read') {
            btnRead.className = 'btn-unread';
            btnRead.innerHTML = 'Not Read';
            myLibrary[arrayIndex].isRead = false;
            // console.log(myLibrary);
        } else {
            btnRead.className = 'btn-read';
            btnRead.innerHTML = 'Read';
            myLibrary[arrayIndex].isRead = true;
            // console.log(myLibrary);
        }
    });

    const btnDelete = document.createElement('button');
    btnDelete.className = 'btn-delete';
    btnDelete.id = index;
    btnDelete.appendChild(document.createTextNode('Delete'));

    btnDelete.addEventListener('click', function() {
        const index = btnDelete.id;
        const cardDiv = document.getElementById(index);
        const containerDiv = document.getElementById('container');
        containerDiv.removeChild(cardDiv);
        const findBook = (element) => element.title === index;
        const arrayIndex = myLibrary.findIndex(findBook);
        myLibrary.splice(arrayIndex, 1);
        console.log(myLibrary);
    })

    cardDiv.append(titleDiv, authorDiv, pagesDiv, btnRead, btnDelete);
    const container = document.getElementById('container');
    container.appendChild(cardDiv);

    const lightbox = document.getElementById('lightbox');
    lightbox.style.visibility = 'hidden';
    const dimmer = document.getElementById('dimmer');
    document.body.removeChild(dimmer);

    console.log(myLibrary);
    return false;
}

// myLibrary.forEach(function(book) {
//     const cardDiv = document.createElement('div');
//     cardDiv.className = 'card';

//     const titleDiv = document.createElement('div');
//     titleDiv.className = 'title';
//     titleDiv.appendChild(document.createTextNode(book.title));

//     const authorDiv = document.createElement('div');
//     authorDiv.className = 'author';
//     authorDiv.appendChild(document.createTextNode(book.author));

//     const pagesDiv = document.createElement('div');
//     pagesDiv.className = 'pages';
//     pagesDiv.appendChild(document.createTextNode(`${book.pages} pages`));

//     const readDiv = document.createElement('div');
//     readDiv.className = 'read';
//     readDiv.appendChild(document.createTextNode(`${book.isRead ? 'Read' : 'Not Read'}`));

//     cardDiv.append(titleDiv, authorDiv, pagesDiv, readDiv);

//     const container = document.getElementById('container');
//     container.appendChild(cardDiv);
// })

// const btnDelete = document.querySelectorAll('.btn-delete');
// btnDelete.forEach(btn => {btn.addEventListener('click', function() {
//     const index = btn.id;
//     const cardDiv = document.getElementById(index);
//     console.log(index);
//     const containerDiv = document.getElementById('container');
//     console.log(containerDiv);
//     containerDiv.removeChild(cardDiv);
// })
// });

// const btnRead = document.querySelectorAll('.btn-read, .btn-unread');
// console.log(myLibrary);
// btnRead.forEach(btn => {btn.addEventListener('click', function() {
//     const index = btn.id;
//     const findBook = (element) => element.title === index;
//     const arrayIndex = myLibrary.findIndex(findBook);
//     if (btn.className === 'btn-read') {
//         btn.className = 'btn-unread';
//         btn.innerHTML = 'Not Read';
//         console.log(myLibrary[arrayIndex]);
//         myLibrary[arrayIndex].isRead = false;
//     } else {
//         btn.className = 'btn-read';
//         btn.innerHTML = 'Read';
//         console.log(myLibrary[arrayIndex]);
//         myLibrary[arrayIndex].isRead = true;
//     }
// })
// })