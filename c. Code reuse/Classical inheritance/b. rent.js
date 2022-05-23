function Article() {
  this.tags = ["css", "js"];
}
var article = new Article();

// Blogposts
function Blogpost() {}
Blogpost.prototype = article;
var blog = new Blogpost();

// StaticPages
function StaticPages() {
  Article.call(this);
}
var page = new StaticPages();

console.log(article.hasOwnProperty("tags")); // YES
console.log(blog.hasOwnProperty("tags")); // NO
console.log(page.hasOwnProperty("tags")); // YES

blog.tags.push("c++");
page.tags.push("vb");

// methods and props are not inherited but copied
console.table(article.tags); // vb is not in there
console.table(page.tags); // c++ is not there
