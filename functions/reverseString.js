function reverseString(string) {
  const stringArray = string.split('');
  let result = [];

  for (let i = stringArray.length - 1; i >= 0; i--) {
    result.push(stringArray[i]);
  }

  return result.join('');
}

export default reverseString;
