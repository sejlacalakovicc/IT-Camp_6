it
     nextInLine(arr, item) {
      // Only change code below this line
      arr.push(item);
      var removed = arr.shift();
      return removed;
      // Only change code above this line
    }
    
    // Setup
    const testArr = [1, 2, 3, 4, 5];
    
    // Display code
    console.log(nextInLine(testArr, 6));