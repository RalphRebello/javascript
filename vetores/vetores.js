let num = [5, 6, 7, 8];

num[3] = 6;
num.push(7);
num.pop(5);

for (i = 0; i < num.length; i++) {
  console.log(num[i]);
}
console.log(num.sort());

for (let i in num) {
  console.log(num[i]);
}

console.log(`index of 5: ${num.indexOf(5)}`);
