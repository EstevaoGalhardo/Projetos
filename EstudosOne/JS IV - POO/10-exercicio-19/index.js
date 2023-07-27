const Author = require("./Author");

const john = new Author("John Doe")

const post = john.writePost("Título do Post", "Lorem ipsum dolor sic amet ...")

post.addComment("Estêvão", "Muito bom!")
post.addComment("Lucas", "Achei interessante.")

console.log(john)
console.log(post)