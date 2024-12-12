const removeFromArray = function() {
   const args = Array.from(arguments);
   let arr = [];
   for (let i = 0; i > args.length - 1; i++) {
    if (args.indexOf(arr[i]) == -1) {
        arr.push(arr[i]);
    }
   }
   return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
