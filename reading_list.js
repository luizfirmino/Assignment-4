/*
The Reading List (15 points)
Keep track of which books you read and which books you want to read! Create an array of objects,
where each object describes a book and has properties for the title (a string), author (a string), and
alreadyRead (a boolean indicating if you read it yet). Iterate through the array of books. For each book,
log the book title and book author like so: &quot;The Hobbit by J.R.R. Tolkien&quot;. Then, use a conditional to
change the output depending on whether you read it yet or not. If you read it, log a string like &#39;You
already read &quot;The Hobbit&quot; by J.R.R. Tolkien&#39;, and if not, log a string like &#39;You still need to read &quot;The Lord
of the Rings&quot; by J.R.R. Tolkien.&#39; Make sure your object contains at least 5 books.
*/

var Book = function (title, author, isRead){
    this._title = title;
    this._author = author;
    this._isReady = isRead;
}

var Books = [new Book("The Greatest: My Own Story", "Muhammad Ali and Richard Durham", true),
             new Book("Ayrton Senna Through My Eye", "Paul-Henri Cahier", false),
             new Book("Great Expectations","Charles Dickens",true),
             new Book("James Brown I Feel Good","Marco Elliot",false),
             new Book("The Lord of the Rings","J. R. R. Tolkien",false)];

for (var book in Books){
    if (Books[book]._isReady){
        window.console.log("You already read \"" + Books[book]._title + " by " + Books[book]._author + "\"");
    }else{
         window.console.log("You still need to read \"" + Books[book]._title + " by " + Books[book]._author + "\"");                   
    }
}