describe('FizzBuzz', function() {
    var fizzBuzz;
    beforeEach(function() {
        fizzBuzz = new FizzBuzz();
    });
    describe('knows when a number is', function() {
        it('divisible by 3', function() {
            expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
        });
        it('divisible by 5', function() {
            expect(fizzBuzz.isDivisibleByFive(5)).toBe(true);
        });
        it('divisible by 3 and 5', function() {
            expect(fizzBuzz.isDivisibleByThree(30) && fizzBuzz.isDivisibleByFive(30)).toBe(true);
        });
    });
    describe('knows when a number is NOT', function() {
        it('divisible by 3', function() {
            expect(fizzBuzz.isDivisibleByThree(7)).toBe(false);
        });
        it('divisible by 5', function() {
            expect(fizzBuzz.isDivisibleByFive(6)).toBe(false);
        });
        it('divisible by 3 and 5', function() {
            expect(fizzBuzz.isDivisibleByFive(7) && fizzBuzz.isDivisibleByThree(7)).toBe(false);
        });
    });
    describe('when playing, says', function() {
        it ('"Fizz" when a number is divisible by 3', function() {
            expect(fizzBuzz.play(3)).toEqual("Fizz");
        });
        it ('"Buzz" when a number is divisible by 5', function() {
            expect(fizzBuzz.play(5)).toEqual("Buzz");
        });
        it ('"FizzBuzz" when a number is divisible by both 3 and 5', function() {
            expect(fizzBuzz.play(15)).toEqual("FizzBuzz");
        });
    });
});

