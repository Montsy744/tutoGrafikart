class Book {
    curantPage = 1;

    constructor (title, nbPage) {
        this.title = title;
        this.nbPage = nbPage;
    }

    get titre () {
        return this.title
    }

    get page () {
        return this.curantPage;
    }

    nextPage () {
        this.curantPage ++;
    }

    close () {
        this.curantPage = 1;
    }
}

class Library {
    allBook = new Array();

    addBook (book) {
        this.allBook.push(book);
    }

    addBooks (books) {
        for(const book of books) {
            this.addBook(book);
        }
    }

    findBooksByLetter (char) {
        let result = new Array();

        for(const book of this.allBook) {
            if(book.titre.charAt(0) === char) {
                result.push(book);
            }
        }
        
        return result;
    }
}



const b = new Book('Seigneur des anneaux', 200);
console.log(b.page)
b.nextPage()
console.log(b.page)
b.close()
console.log(b.page)

const l = new Library()
l.addBook(b)
l.addBooks([
    new Book('Ready player one', 100),
    new Book('Oui-oui', 10),
    new Book('Sillage', 50),
])
console.log(l.findBooksByLetter('S'))
