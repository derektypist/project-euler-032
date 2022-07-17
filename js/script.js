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