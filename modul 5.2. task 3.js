let str = "Hello";
function reverseString(str) {
  let arr;
  arr = str.split("");
  arr.reverse("");
  let newStr = arr.join('');
  console.log(newStr);
}
reverseString("Hello");