// pattern 1
function printStarPattern(rows, cols) {
    let pattern = "";
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        pattern += "* "; 
      }
      pattern += "\n";
    }
    console.log(pattern);
  }
  printStarPattern(5, 5);


// pattern 2
  function printTrianglePattern(rows) {
    let pattern = "";
    for (let i = 1; i <= rows; i++) { 
      for (let j = 1; j <= i; j++) { 
        pattern += "* ";
      }
      pattern += "\n"; 
    }
    console.log(pattern);
  }
  printTrianglePattern(5); 


  // pattern 3
  function printDiagonalPattern(size) {
    let pattern = "";
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (i === j || i + j === size - 1) {
          pattern += "* ";
        } else {
          pattern += "  "; 
        }
      }
      pattern += "\n";
    }
    console.log(pattern);
  }
  printDiagonalPattern(5); 
  
  
  
  
  
 