function oldBooks(input){
    let index = 0;
    let book = input[index];
    index++;
    let bookCounter = 0;
    let bookIsFound = false;
    let currentBook = input[index];

    while (currentBook !== "No More Books") {

        if (book === currentBook) {
            bookIsFound = true;
            break;
        }
        
        bookCounter++;
        index++;
        currentBook = input[index];
    }
    if (bookIsFound){
        
    console.log(`You checked ${bookCounter} books and found it.`);
    } else {
        console.log("The book you search is not here!");
        console.log(`You checked ${bookCounter} books.`);
    }
}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])


