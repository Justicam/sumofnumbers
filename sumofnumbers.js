// E26
// functions sumFor, sumWhile, sumRecursion, and sumTheFunctionalWay
// return the sum of the numbers in a given list for all
// function 1: using a for loop
function sumFor(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
// function 2: using a while loop
function sumWhile(numbers) {
    var sum = 0;
    var i = 0;
    while (i < numbers.length) {
        sum += numbers[i];
        i++;
    }
    return sum;
}
// function 3: using recursion
function sumRecursion(numbers) {
    if (numbers.length === 0)
        return 0;
    return numbers[0] + sumRecursion(numbers.slice(1));
}
// function 4: using functional programming (reduce)
function sumTheFunctionalWay(numbers) {
    return numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
}
// test functions
console.log(sumFor([1, 2, 3, 4])); // output: 10
console.log(sumWhile([1, 2, 3, 4])); // output: 10
console.log(sumRecursion([1, 2, 3, 4])); // output: 10
console.log(sumTheFunctionalWay([1, 2, 3, 4])); // output: 10
