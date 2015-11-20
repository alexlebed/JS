function myMath() {
   var mathPlus = 0;
   var mathMinus = 0;
   var mathMultiply  = 0;
   var mathDivision  = 0;
  
    return {
        plus: function() {
            for (var i = 0; i < arguments.length; i++) {
                mathPlus += arguments[i];
            }
	  
            return console.log(mathPlus);
        },
     
        minus: function() {
            if (arguments.length <= 1) {
                for (var i = 0; i < arguments.length; i++) {
                    mathMinus -= arguments[i];
                }
            } else {
                mathMinus = arguments[0];
        
                for (var i = 1; i < arguments.length; i++) {
                    mathMinus -= arguments[i];
                }
            }

            return console.log(mathMinus);
        },
     
        multiply: function() {
            if (arguments.length <= 1) {
                for (var i = 0; i < arguments.length; i++) {
                    mathMultiply *= arguments[i];
                }
            } else {
                mathMultiply = arguments[0];
        
                for (var i = 1; i < arguments.length; i++) {
                    mathMultiply *= arguments[i];
                }
            }

            return console.log(mathMultiply);
        },
     
        division: function() {
            if (arguments.length <= 1) {
                for (var i = 0; i < arguments.length; i++) {
                    mathDivision /= arguments[i];
                }
            } else {
                mathDivision = arguments[0];
        
                for (var i = 1; i < arguments.length; i++) {
                    mathDivision /= arguments[i];
                }
            }

            return console.log(mathDivision);
        },
     
        reset: function() {
            mathPlus = 0;
            mathMinus = 0;
            mathMultiply  = 0;
            mathDivision  = 0;
        }
    } 
};

var start = new myMath();

// все параметры складываются

start.plus(5,4,1);   // 10
start.plus(1);       // 11

/* Два и больше параметров: от первого [отнимаются, делится, умножается] остальные.
   Один параметр: берется результат предыдущего действия 
   если предыдущих действий нет то дефолтно "0"          */

start.minus(10,5);    // 5
start.minus(3);       // 2

start.multiply(3,3,2);  // 18
start.multiply(3);    // 54
start.multiply(2);    // 108

start.division(27,3,3); // 3
start.division(3);    // 1
start.division(3);    // 0,33

start.reset();        // reset all