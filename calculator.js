function nextInLine(arr, item) {

  // Only change code below this line

  arr.push(item);
  var removed = arr.shift();
  return removed;

  // Only change code above this line

}

const testArr = [1, 2, 3, 4, 5];

  // Display yyyyy   yyyyy   yyyyy   yyyy

  console.log(nextInLine(testArr, 6));


  