// Function to Get Number Information (Including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the input field
    let num = document.getElementById("mynumber").value;
    // Check if input is valid
    if (isNaN(num) || num.toString().length == 0 || num<2 || num>9 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 2 and 9.`
    } else {
        // Remove any leading zeros
        num = parseInt(num);
        txt += `You have entered the number ${num}.`;
        txt += `Sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through ${num} pandigital is ${pandigitalProducts(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
    Function to find the sum of all products whose
    multiplicand/multiplier/product identity can be written as a 1 through
    n pandigital

    pandigitalProducts(4) returns 12
    pandigitalProducts(6) returns 162
    pandigitalProducts(7) returns 0
    pandigitalProducts(8) returns 13458
    pandigitalProducts(9) returns 45228

*/
function pandigitalProducts(n) {
    function is1toNPandigital(n,digitStr) {
        if (digitStr.length !== n) return false;
        for (let i=digitStr.length;i>0;i--) {
            if (digitStr.indexOf(i.toString()) === -1) return false;
        }
        return true;
    }

    function concatenateNums(...numbers) {
        let digitStr = '';
        for (let i=0;i<numbers.length;i++) {
            digitStr += numbers[i].toString();
        }
        return digitStr;
    }

    
}