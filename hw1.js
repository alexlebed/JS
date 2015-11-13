//All data types
function test() {};

console.log(typeof 'Alex');
console.log(typeof 3.14);
console.log(typeof false);
console.log(typeof [1,2,3,4]);
console.log(typeof {name:'Alex', age:28});
console.log(typeof test);
console.log(typeof Undefined);
console.log(typeof Null);


//Change data types string and number
var number = 101;
var str = '102';

console.log(typeof number);
console.log(typeof str);

console.log(typeof ('' + number));
console.log(typeof + str);


//String and number equal to each other
var number = 102;
var str = '102';

console.log(number == str);   //true
console.log(number === str);  //false


//Simple way encrypt and decrypt
var number = 123456789;
var encrypt = number.toString(36);
var decrypt = parseInt(encrypt, 36);

console.log(number);
console.log(encrypt);
console.log(decrypt);   