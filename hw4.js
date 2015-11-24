// 1) Використовуючи літеральну нотацію створити обєкт car з властивістю speedometer = 0; 

var car = {
  speedometer: 0
}

/* 
2) Використовуючи методи Object додати до обєкту car наступні методи:
	setSpeedometer, що оновлює дані speedometer (сеттер)
	getSpeedometer, що повертає вміст speedometer (геттер)
	clearSpeedometr, що очищує вміст speedometer
*/

Object.defineProperties(car, {
  setSpeed: {
      set: function(newValue) { 
        return this.speedometer = newValue; 
      }
  },
  getSpeed: {
      get: function() { 
        return this.speedometer; 
      }
  },
  clearSpeed: {
      get: function() { 
        return this.speedometer = 0;
      }
  }
    
});

console.log(car.getSpeed);

car.setSpeed = 58;
console.log(car.getSpeed);

car.clearSpeed;
console.log(car.getSpeed);

/*
3) Модифікувати код таким чином, щоб можна було зробити наступне:
	car.setSpeed(200).setSpeed(300).clearSpeed().getSpeed() // Ланцюжковий виклик
*/

var car = {
  speedometer: 8
};

car.setSpeed = function(newValue) {
  this.speedometer = newValue;
  
  return this;
  };

car.getSpeed =  function() {
  console.log(this.speedometer);
  
  return this;
};

car.clearSpeed = function() {
    this.speedometer = 0;
  
    return this;
};

car.getSpeed()
   .setSpeed(300)
   .getSpeed()
   .clearSpeed()
   .getSpeed();

