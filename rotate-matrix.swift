var array: [[Int]] = [ [29, 62, 8], [12, 60, 31], [99, 79, 12] ]

func rotateMatrix(input: [[Int]]) -> [[Int]] {

  var output:[[Int]] = []

  for _ in input {
    output.append([])
  }

  for t in 0..<input.count {
    for i in 0..<input[0].count {
      output[t].insert(input[i][t], atIndex: 0)
    }
  }

  return output
}

print(rotateMatrix(array))
