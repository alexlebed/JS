// 1. Запустити код в консолі браузера/NodeJS. Яким буде результат виконання?
// 2. Обгрунтуйте будь-ласка результат виконання вищезгаданого коду.

var foo = 1; //в данной ситуации не имеет отношения так как 
             // внутри функции обявлена локальная переменная foo
function bar() {
  
 //var foo всплывает и равно undefined;
  
    if (!foo) { // !undefined === true
        var foo = 10; 
    } 
	
    alert(foo); //foo равно 10
} 
bar();

// 3. Обгрунтуйте будь-ласка результат виконання коду.

var a = 1; 
function b() { 
    // при чтении кода function a() {} всплывает
	// функция находится в локальной области видимости
    a = 10; // "а" переопределяет функцию и присваеваит 10 но "а" уже локальная. Проверка "а" in window дает false
    return; 
    function a() {} 
} 
b(); 
console.log(a);  // a равно 1 

// 4. Якщо результатом виконнання коду буде число відмінне від 10, 
//    виправити помилку.  Виправити мінімальною кількістю операцій.

var a = 1; 
function b() { 
    window.a = 10; // 1-й вариант прописать window
    return ;  
    //function a() {} // 2-й вариант убрать функцию "а"
} 
b(); 
console.log(a);

// 5. Наведіть приклади з використанням унарних, бінарних, тернарних операторів (якомога більше різних операторів)

// Унарные

var a = 5;
a = -a; //-5

var a = '5';
a = +a; // typeof a - number

// ++ Увеличение на 1 X++ или ++Х
// -- Уменьшение на 1 Y-- или --Х
// ! «отрицание», унарный оператор, меняет значение на противоположное 

// Бинарные

// + Сложение X+Y
// - Вычитание X-Y
// * Умножение X*Y
// / Деление X/Y
// % Деление по модулю X%Y
// &&  логическое «и»
// ||  логическое «или» 
// > — оператор «больше».
// >= — оператор «больше или равно».
// < — оператор «меньше».
// <= — оператор «меньше или равно».
// != — оператор «не равно».
// == — оператор эквивалентности (равенства).

//Условный (тернарный) оператор

var a = 5 > 4 ? true : false; // true 

// 6. Написати скріпт використовуючи метод concat() на тему:

var first = 'Нехай завжди буде сонце,';
var second = 'Нехай завжди буде небо,';
var third = 'Нехай завжди буде мама,';
var fourth = 'Нехай завжди буду я.';

var arr = [first, second, third, fourth];

function concatStrings(arr){
    var all = '';

    for (var i = 0; i < arr.length; i++) {
        all = all.concat(arr[i] + '\n');
    }
  
    return all;
}

console.log(concatStrings(arr));

// 7. За допомогою цикла реалізувати код, який виводить наступну картину
/*

*********
*****************
***********************
***************************
*****************************
*****************************
***************************
***********************
*****************
*********

*/


function picture(data) {
    var countLine = 1;
    var revers = 0;
    var result = '';
    var i,j;

for (i = 0; i < data.maxCountLine * 2; i++) {
  
  for (j = 0; j < data.min; j++) {
    result += '*';
  }
  
  if (countLine >= data.maxCountLine) {
    revers += 1;

    if (revers >= 1) {
      data.min -= data.startStep;
      data.startStep += data.step; 
    }
    
  } else {
    data.min += data.startStep;
    data.startStep -= data.step; 
  }
  
  countLine += 1;
  result += '\n';  
}
  
console.log(result);
}


var data = {
  	maxCountLine: 5,
	startStep: 8,
    step: 2,
    min: 9
}

picture(data);


//8. За допомогою циклу while / do-while реалізувати timer на 10 секунд. 
//Зверніть увагу на властивості обєкту/Конструктора Date (не використовуючи JS timer - setTimeOut)

function myTimeOut(setTime) {
  var newTime = endTime = new Date();

  endTime.setSeconds(endTime.getSeconds() + setTime);

  do {
    newTime = new Date();

    if (newTime.getSeconds() == endTime.getSeconds()) {
        console.log("Time out");
    }

  } while (newTime.getSeconds() != endTime.getSeconds());
}

myTimeOut(10);


















