let myLibrary = [];

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title
        this.author = author
        this.pages = pages
        this.isRead = isRead
    }
    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? 'read already' : 'not read yet'}`;
    }
    addBookToLibrary() {
        myLibrary.push(this);
        return myLibrary.length;
    }
}

// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
// const nineteenEightyFour = new Book('1984', 'George Orwell', 298, true);
// const oneHundredYearsOfSolitude = new Book('One Hundred Years of Solitude', 'Gabriel Garcia Marquez', 417, true);
// theHobbit.addBookToLibrary();
// nineteenEightyFour.addBookToLibrary();
// oneHundredYearsOfSolitude.addBookToLibrary();

const openerbox = (() => {
    const opener = () => {
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
            lightbox.style.top = window.innerHeight/2 - 302 + 'px';
            lightbox.style.left = window.innerWidth/2 - 120 + 'px';
            return false;
        }        
    };
    return {opener};
})();

openerbox.opener();

document.getElementById('form').onsubmit = function() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const itsRead = document.getElementById('read').checked;
    const book = new Book(title, author, pages, itsRead);
    book.addBookToLibrary();
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
        } else {
            btnRead.className = 'btn-read';
            btnRead.innerHTML = 'Read';
            myLibrary[arrayIndex].isRead = true;
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
