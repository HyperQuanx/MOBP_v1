let a = 100;
let b = [];

for (let i = 1; i <= a; i++) {
  if (a % i == 2) {
    b.push(i);
  }
}

console.log(b);
