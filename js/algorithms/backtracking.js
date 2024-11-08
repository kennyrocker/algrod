
/*
https://leetcode.com/problems/letter-combinations-of-a-phone-number/


Given a string containing digits from 2-9 inclusive,
return all possible letter combinations that the number could represent.
Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below.
Note that 1 does not map to any letters.

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input: digits = ""
Output: []

Example 3:
Input: digits = "2"
Output: ["a","b","c"]

 */

var digits = "23";



/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    if (!digits.length) return [];

    var map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    var outMap = {};


    for (var i = 0; i < digits.length; i++ ) {

        const d = digits[i];


        for (var j = 0; j < d.length; j++) {

            const string = map[d];

            console.log(string);


            //const combo = map[digits[k]][i] + map[]

        }

    }

};


// letterCombinations(digits);



var arr = [1, 2, 3];

// find out all permutations combo the input can form

/*
*   0 1 2, 0 2 1, 1 0 2, 1 2 0, 2 0 1, 2 1 0
*
*   1 2 3, 1 3 2, 2 1 3, 2 3 1, 3 1 2, 3 2 1
* */




var permutation = function( arr ) {




}





