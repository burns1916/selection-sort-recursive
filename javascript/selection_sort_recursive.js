function selectionSortRecursive(arr) {
  // type your code here
  if (arr.length < 2) return arr
  const [p, ...rest] = arr
  const low  = rest.filter(n => n <= p)
  const high = rest.filter(n => n > p)
  return [...selectionSortRecursive(low), p, ...selectionSortRecursive(high)]
}



if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
