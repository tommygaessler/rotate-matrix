var input = [ [29, 62, 8], [12, 60, 31], [99, 79, 12] ];

function rotateMatrix(array) {

  var output = [];

  for (var i = 0; i < array.length; i++) {
    output.push([]);
    console.log(output);
  }

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[0].length; j++) {
      output[j].unshift(array[i][j]);
      console.log(i, j);
      console.log(output);
    }
  }

  return output;
}
console.log(rotateMatrix(input));
