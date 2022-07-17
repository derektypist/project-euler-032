# Project Euler 032 - Pandigital Products

We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity 39 x 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

The aim is to find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through n pandigital.

**HINT:** Some products can be obtained in more than one way so be sure to include it once in your sum.

Information at [Project Euler 032](https://projecteuler.net/problem=32)

## UX

**Getting Started**

Enter a whole number between 2 and 9 in the input field and click on the Submit Button.  Leading Zeros are allowed, so for example, 02 is the same as 2.  You will see the number entered as well as the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through n pandigital, unless you have made an invalid input.  For example, if you entered 4, you would expect the sum of all products to be 12.  Click on the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 2 or greater than 9
- Entering a number that is not an integer

As a user, I expect the function `pandigitalProducts(4)` to return a number.

As a user, I expect the function `pandigitalProducts(4)` to return 12.

As a user, I expect the function `pandigitalProducts(6)` to return 162.

As a user, I expect the function `pandigitalProducts(7)` to return 0.

As a user, I expect the function `pandigitalProducts(8)` to return 13458.

As a user, I expect the function `pandigitalProducts(9)` to return 45228.

**Information Architecture**

The function `pandigitalProducts(n)` returns a number, where `n` is a number between 2 and 9.

## Features

Allows the user to enter the number of digits as well as getting the sum of all products
whose multiplicand/multiplier/product identity can be written as a 1 through n pandigital.
Performs checks on valid user input.  If the input is not valid, an error message is displayed.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.2.0-Beta1 and Google Fonts.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-032) at the main branch.




