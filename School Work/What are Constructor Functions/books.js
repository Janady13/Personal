function Book(title, author, themes=[]) {
	this.title = title;
	this.author = author;
	this.themes = themes;
}

Book.prototype.addthemes = function(theme){
	this.themes =[...this.themes, theme]
}

const book1 = new Book ('Eye of the World', "Robert Jordan", "Fantasy");
const book2 = new Book ("StormLight Archieve","Brandon Sanderson","Action");

console.log(book1);
console.log(book2);

book1.addthemes("action")
book2.addthemes("Fantasy")

console.log(book1)
console.log(book2)