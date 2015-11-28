/* 1) Знайти неперервний підмасив масиву , сума
      елементів якого є максимальною. 
*/

var a = [[1,2,3],[400, 'lk'],[7,8,9],[1,1,1]];

a[3][9] = 100;

var result = {
    arrNumber: '',
    sum: 0
};

for (var i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
        var c = a[i],
            count = 0;
		
        for (var j = 0; j < c.length; j++) {
            count += +c[j];
        }
    
        if(result.sum < count) {
            result.arrNumber = i;
            result.sum = count; 
        }
    }
}

console.log(a[result.arrNumber]); // [7,8,9]
console.log(result.sum);          // 24

/* 2) Створити функцію сумування двох дуже
      довгих чисел представлених строкою.
*/

var a = '10000000000000000000000000000.000789451';
var b = '777770000000000000000.9999999999999999999999999';

var result = sum(a, b);

console.log(result);

function sum(a, b) {
    var findDotA = a.split(".");
    var findDotB = b.split("."); 
    var arr1 = findDotA[0].split("").reverse();
    var arr2 = findDotB[0].split("").reverse();
    var result = [];
    var length = 0;
    var mind = 0;
    
    function findLength(arr1, arr2) {
        arr1 = arr1 || [];
        arr2 = arr2 || [];
    
        if (arr1.length >= arr2.length) {
            length = arr1.length;
        } else {
            length = arr2.length;
        }
    } 
  
    function addLength(arr, length) {
        arr = arr || '';
   
        var newArr = arr.split("");
    
        if (newArr.length != length) {      
            for (var i = 0; i < length; i++) {
                if (newArr[i] == undefined) {
                    newArr.push(0);
                }      
            }    
        }
    
        return newArr;
    } 
  
    function sumFunct(a, b) {
    
        for (var i = 0; i < length; i++) {
            var sum = +(a[i] || 0) + +(b[i] || 0) + mind;

            if (sum > 9) {
                var digit = sum.toString()[1];
                result.push(digit);
                mind = 1;
            } else {
                result.push(sum);
                mind = 0;
            }
        }   
    }
  
    if (findDotA[1] || findDotB[1]) {
        findLength(findDotA[1], findDotB[1]);
    
        var arrA = addLength(findDotA[1], length);
        var arrB = addLength(findDotB[1], length);
    
        sumFunct(arrA.reverse(), arrB.reverse())
    
        result.push('.');
    }
    
    findLength(arr1, arr2)
  
    sumFunct(arr1, arr2);
  
    if(mind) {
        result.push(1);
    }
  
    return result.reverse().join('');
}


/* 3) Написати метод реалізуючий різницю двох 
      масивів. Причому різниця має враховувати 
      кількість однакових елементів.
*/


var a = [5,7,6,9];
var b = [5,5,1,8,7,1,6];

var h = diffArr(a,b);

console.log(h);
 
function diffArr(a, b) {
    var differenceArr = [];
  
    for (var i = 0; i < a.length; i++) {
        differenceArr.push(a[i]);
    } 
      
    for (var j = 0; j < b.length; j++) {
        var count = 0;
        
		for ( var i = 0; i < differenceArr.length; i++) {
            if(differenceArr[i] === b[j]) {
                count++;
            }
        }
    
        if (!count) {
            differenceArr.push(b[j]);
        }
    }
  
    return differenceArr;
}












