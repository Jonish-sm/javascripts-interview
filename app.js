// console.log("Hello");

// const x = [1, 8, 5, 7];

// console.log(x);

// const [todos, setTodos] = useState([]);

// const y = 12;

// function x(a, b) {
//   return b * a;
// }

// console.log(x(5, 7));

// function x(a, b) {
//   return b * a;
// }
// function x(a, b) {
//   return b * a;
// }

const a = [1, 10, 4, 78, 23, 3];

const b = [2, 7, 8, 77, 23, 10];

var common = {};

var x = "value";
var y = 1;

for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < b.length; j++) {
    if (a[i] === b[j]) {
      common[x + y] = a[i];
      y++;
    }
  }
}
console.log(common);
