/**
*
* @author Alan Olivares
*/
var assert = require("assert"),
    GenerateId = require("../");

g = new GenerateId();

// NOT EQUALS
assert.notEqual(g.generate(10), g.generate(10));

// ADD BEFORE
assert.equal(g.generate({
	length : 2,
	add : { before : ":s" }
}).substr(0, 2), g.generate({
	length : 2,
	add : { before : ":s" }
}).substr(0, 2));

// ADD AFTER
assert.equal(g.generate({
	length : 2,
	add : { after : ":s" }
}).substr(2, 4), g.generate({
	length : 2,
	add : { after : ":s" }
}).substr(2, 4));

console.log("Success test!", g.generate({
  length : 10,
  include : ["upper", "down", "numbers"],
  add : {
    before : "|_- ",
    after : " -_|"
  }
}));

