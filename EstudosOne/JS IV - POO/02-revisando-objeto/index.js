function Book(tittle, pages, tags, author) {
    this.tittle = tittle
    this.pages = pages
    this.tags = tags
    this.author = author
    this.addOnStock - function addOnStock(quantity) {
        this.inStock += quantity
    }
    this.save = function () {
        //salvo no banco de dados
    }
}

const author = { name: "Christopher Paolini"}
const tags = ["fantasy", "adventure"]

const eragon = new Book ("Eragon", 468, tags, author)

const eldest = new Book("Eldest", 644, tags, author)

console.log(eragon)
console.log(eldest)