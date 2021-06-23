// Task 2a - Logic

// Create a function that takes the string parameter and returns true or false if the parentheses in the string
// are correctly matched and each one is accounted for. For example:
// If the input is (Welcome (to (Morph))), then the output should be true, but if the input is Welcome (to
// (the (Morph) then the output should be false, because the parentheses do not correctly match up.

// Edge case: if the input does not contain parentheses, return true.
// Examples:
// Input: "Lorem ((ipsum)(dolor)sit)"
// Output: true

// Input: "(Lorem (ipsum dolor)sit"
// Output: false


var validateParenthesis = function removeFirstPairOfParenthesis(input) {
    var firstIndexOfOpenParenthesis = input.indexOf("(");
    var lastIndexOfClosedParenthesis = input.lastIndexOf(")");
    if (firstIndexOfOpenParenthesis != -1 && lastIndexOfClosedParenthesis != -1 && firstIndexOfOpenParenthesis < lastIndexOfClosedParenthesis) {
        return removeFirstPairOfParenthesis(input.substring(firstIndexOfOpenParenthesis + 1, lastIndexOfClosedParenthesis))
    } else if (firstIndexOfOpenParenthesis == -1 && lastIndexOfClosedParenthesis == -1) {
        return true
    } else {
        return false
    }

}

console.log(validateParenthesis("(Welcome (to (Morph)))"))
