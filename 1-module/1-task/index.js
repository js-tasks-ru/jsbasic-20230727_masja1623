function factorial(n) {
  let result = 1;

  if (n === 0 || n === 1) {
    return result;
  }
  if (n > 1) {
    // DESC: fist method
//   for (let i = n; i >= 1; i--) {
//     answer =  answer * i
//   }
// return answer

    // DESC: second method
    let i = n
    while (i >=1) {
      result =  result * i
      i--;
    }
    return result;
  }
  else {
    return ('Error, enter the correct value of n');
  }
}

