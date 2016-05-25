//if num is divisible by 3, show message "fizz"
// if num is divisible by 5, show message "buzz"
//if num is divisible by 3 and 5, show message "fizzbuzz"

/*



            for (var i = 1; i < 31; i++) {
              if ((i % 5 == 0) && (i % 3 == 0)) {
                console.log("FizzBuzz");
              }
              else if (i % 5 == 0) {
                console.log("Buzz");
              }
              else if (i % 3 == 0) {
                console.log("Fizz");
              }
              else {
                console.log(i);
              }
            }
    */
for (var i = 1; i < 31; i++) {
    var outPut = i;

    if (i % 3 == 0) {
        outPut = "Fizz";
    }
    if (i % 5 == 0) {
        outPut = "Buzz";
    }
    if ((i % 5 == 0) && (i % 3 == 0)) {
        outPut = "FizzBuzz";
    }
    console.log(outPut);
}
