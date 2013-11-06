//underscore_examples.js

//pull in underscore library
var _ = require("underscore");

var cl = console.log;

/* 
_.map example with array.
Applies the function to each element in the array.
The function adds one to each element.
input: [1,2,3,4,5] 
result: [2,3,4,5,6]
 */
var arr1 = [1, 2, 3, 4, 5];
cl("Calling _.map with Array:");
cl(arr1);
cl("Result:");
cl(
	_.map(arr1, function(val) {
		return val + 1;
	})
);

/*
_.map example with object.
Returns array of returned values with access to both properties and values.
The function uppercases the property names.
input: { one: 1, two: 2, three: 3, four: 4, five:5 }
result: ["ONE","TWO","THREE","FOUR","FIVE"] 
 */
var obj1 = {
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5
};
cl("Calling _.map with Object");
cl(obj1);
cl("Result:");
cl(
	_.map(obj1, function(val, prop) {
		return prop.toUpperCase();
	})
);

/*
_.reduce example with array.
Returns a single result from a list of values applying the function along the way.
This sums up the result of 2 to the power of each element value.
The third argument ('0' below) to reduce is the initial starting value for memo.
input: [1,2,3,4,5]
result: 62 
*/
var arr1 = [1, 2, 3, 4, 5];
cl("Calling _.reduce with Array:");
cl(arr1);
cl("Result:");
cl(
	_.reduce(arr1, function(memo, value) {
		return memo + Math.pow(2, value);
	}, 0)
);

/*
_.union example with multiple arrays
Union takes in arrays and returns an array of unique elements.
_.union(*arrays)
input: [1,2,3,4,5],[1,3,5,7,9]
result: [1,2,3,4,5,7,9]
 */
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [1, 3, 5, 7, 9];
cl("Calling _.union with array of arrays:");
cl(arr1);
cl(arr2);
cl("Result:");
cl(
	_.union(arr1, arr2)
);

/*
_.union example with single array
Takes in a single array and returns the same array.
input: [1,1,1,1,2]
result: [1,2]
 */
var arr1 = [1, 1, 1, 1, 2];
cl("Calling _.union with single array:");
cl(arr1);
cl("Result:");
cl(
	_.union(arr1)
);

/*
_.zip example with same length arrays
Zip combines each array at the cooresponding index.
input: ["a","b", "c"],[1,2,3]
result: [["a",1],["b",2],["c",3]]
 */
var arr1 = ["a", "b", "c"];
var arr2 = [1, 2, 3];
cl("Calling _.zip with same length arrays:");
cl(arr1);
cl(arr2);
cl("Result:");
cl(
	_.zip(arr1, arr2)
);

/*
_.zip example with different length arrays
Zip uses longest length array and uses undefined in place of indexes that
exceed the length of the shorter arrays.
input: [["a","b", "c"],[1,2,3,4,5]
result: [["a",1],["b",2],["c",3],[undefined,4],[undefined,5]]
 */

var arr1 = ["a", "b", "c"];
var arr2 = [1, 2, 3, 4, 5];
cl("Calling _.zip with different length arrays:");
cl(arr1);
cl(arr2);
cl("Result:");
cl(
	_.zip(arr1, arr2)
);

/*
_.extend example with no name collision
_.extend(destination, *sources) 
copys properties from the sources objects to the destination object. 
The copy writes in-order so same-named properties will be set to whichever source 
has it last.
input: {name: "john doe"},{age:30}
result: {name: "john doe", age:30}
 */

var obj1 = {name: "john doe"};
var obj2 = {age: 30};

cl("Calling _.extend with objects:");
cl(obj1);
cl(obj2);
cl("Result:");
cl(
	_.extend(obj1,obj2)
);

/*
_.extend example with name collision
input: {name: "john doe"},{age:30},{name:"jd"},{age:20}
result: {name: "jd", age:20}
 */

var obj1 = {name: "john doe"};
var obj2 = {age: 30};
var obj3 = {name: "jd"};
var obj4 = {age: 20};
cl("Calling _.extend with objects:");
cl(obj1);
cl(obj2);
cl(obj3);
cl(obj4);
cl("Result:");
cl(
	_.extend(obj1,obj2,obj3,obj4)
);

/*
_.pick example 
_.pick(object, *keys) 
Pick returns a copy of the object filtered by the specified keys.
input: {name: "john doe", age: 30, job: "developer"},'age','job'
result: {age: 30, job: "developer"}
 */
var obj1 = {name: "john doe", age: 30, job: "developer"};
var keys = ['age','job'];
cl("Calling _.pick with object:");
cl(obj1);
cl("and keys:");
cl(keys);
cl("Result:");
cl(
	_.pick(obj1,keys)
);

/*
_.pick example with no matching keys
input: {name: "john doe", age: 30, job: "developer"},'nomatch'
result: {}
 */

var obj1 = {name: "john doe", age: 30, job: "developer"};
var keys = ['nomatch'];
cl("Calling _.pick with object:");
cl(obj1);
cl("and keys:");
cl(keys);
cl("Result:");
cl(
	_.pick(obj1,keys)
);

/*
_.invert example with unique values
Inverts an objects keys and values.
Makes an objects keys its values and its values its keys.
input: {a:1,b:2,c:3}
result: {"1":"a","2":"b","3":"c"}
 */

var obj1 = {a:1,b:2,c:3};
cl("Calling _.invert with object:");
cl(obj1);
cl("Result:");
cl(
	_.invert(obj1)
);

/*
_.invert example with non-unique values.
Does not fail, only keeps last value.
input: {a:1,b:1,c:1}
result: {"1":"c"}
 */

var obj1 = {a:1,b:1,c:1};
cl("Calling _.invert with object:");
cl(obj1);
cl("Result:");
cl(
	_.invert(obj1)
);

/*
_.pluck example
_.pluck(list, propertyName)
extracts a list of property values from a list of objects
input: [{letter:"a",position:1},{letter:"b",position:2},{letter:"c",position:3}],"letter"
result: ["a","b","c"]
*/
var letters = [{letter:"a",position:1},{letter:"b",position:2},{letter:"c",position:3}];
var prop = 'letter';
cl("Calling _.pluck object:");
cl(letters);
cl("prop:");
cl(prop);
cl("Result:");
cl(
	_.pluck(letters,prop)
);

/*
_.pluck example with non-matching prop name
input: [{letter:"a",position:1},{letter:"b",position:2},{letter:"c",position:3}],"letter"
result: [undefined,undefined,undefined]
 */
var letters = [{letter:"a",position:1},{letter:"b",position:2},{letter:"c",position:3}];
var prop = "nomatch";
cl("Calling _.pluck object:");
cl(letters);
cl("prop:");
cl(prop);
cl("Result:");
cl(
	_.pluck(letters,prop)
);

/*
_.pluck example with non-existing prop name
input: [{letter:"a",position:1},{letter:"b",position:2},{letter:"c",position:3}],"letter"
result: [undefined,undefined,undefined]
 */
var letters = [{letter:"a",position:1},{letter:"b",position:2},{letter:"c",position:3}];
cl("Calling _.pluck object:");
cl(letters);
cl("Result:");
cl(
	_.pluck(letters)
);