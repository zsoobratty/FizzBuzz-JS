var FizzBuzz = function() {};

FizzBuzz.prototype.isDivisibleByThree = function(number) {
    return(number % 3 === 0);
};

FizzBuzz.prototype.isDivisibleByFive = function(number) {
    return(number % 5 === 0);
};

FizzBuzz.prototype.play = function(number) {
     if (this.isDivisibleByThree(number) && this.isDivisibleByFive(number)) {
         return "FizzBuzz"
     } else if (this.isDivisibleByFive(number)) {
        return "Buzz"
     } else if (this.isDivisibleByThree(number)) {
         return "Fizz"
     } else {
         return number
     };
};

FizzBuzz.prototype.oneToAHundred = function() {
    for(i = 1; i <= 100; i++) {
        console.log(this.play(i))
    };
};