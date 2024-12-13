const palindromes = function (word) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz01234566789';
    
    let arrange = word.toLowerCase().split("").filter((character) => alphanumerical.includes(character)).join("");

    let reversed = arrange.split("").reverse().join("");


    console.log(arrange);

    if (reversed === arrange) {
        return true;
    } else {
        return false;
    }

}

// Do not edit below this line
module.exports = palindromes;
