function find_single_number(arr) {
  let x = arr[0];

  for (let i = 1; i < arr.length; i++) {
    x = x ^ arr[i];
  }
  return x;
}

console.log(find_single_number([1, 4, 2, 1, 3, 2, 3]));
