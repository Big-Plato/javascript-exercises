const fibonacci = function(number) {
    number = parseInt(number);
    let fibonacci = [];

    fibonacci[0] = 0;
    fibonacci[1] = 1;
    

    if (number < 0) {
        return "OOPS";
    } else if (number === 0) {
        return 0;
    } else if (number === 1 || number === 2) {
        return 1;
    } else if (number > 2) {
        for (let i = 2; i <= number; i++) {
            fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
        }
        return fibonacci[number];
    }
   
};

// Do not edit below this line
module.exports = fibonacci;
