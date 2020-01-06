function dog() {
	// body...
	this.stomach = [];
}
dog.prototype.eat = function(cat){
	this.stomach.push(cat);

}
module.exports = dog;