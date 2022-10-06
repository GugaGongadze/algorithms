const Heap = require('collections/heap'); //http://www.collectionsjs.com

const find_maximum_capital = function (
  capital,
  profits,
  numberOfProjects,
  initialCapital
) {
  let capitalProfitMap = {};

  capital.forEach((c, i) => (capitalProfitMap[c] = profits[i]));

  let maxCapital = new Heap(
    [],
    null,
    (a, b) => capitalProfitMap[a] - capitalProfitMap[b]
  );
  let minCapital = new Heap(
    [],
    null,
    (a, b) => capitalProfitMap[b] - capitalProfitMap[a]
  );

  for (let i = 0; i < capital.length; i++) {
    maxCapital.push(capital[i]);
    minCapital.push(capital[i]);
  }

  let currentCapital = initialCapital;

  for (let i = 0; i < numberOfProjects; i++) {
    // min available
    if (minCapital.peek() > currentCapital) {
      break;
    }

    let minAvail = minCapital.peek();

    let newMaxCapital = new Heap(
      [],
      null,
      (a, b) => capitalProfitMap[a] - capitalProfitMap[b]
    );

    // max possible
    let maxPoss = maxCapital.pop();

    while (maxPoss !== undefined) {
      if (maxPoss <= currentCapital) {
        break;
      } else {
        newMaxCapital.push(maxPoss);
        maxPoss = maxCapital.pop();
      }
    }

    if (minAvail >= maxPoss) {
      const min = minCapital.pop();

      currentCapital = currentCapital + capitalProfitMap[min];
    } else {
      currentCapital = currentCapital + capitalProfitMap[maxPoss];
    }

    maxCapital = newMaxCapital;
  }

  return currentCapital;
};

console.log(`Maximum capital: ${find_maximum_capital([0, 1, 2], [1, 2, 3], 2, 1)}`);
console.log(`Maximum capital: ${find_maximum_capital([0, 1, 2, 3], [1, 2, 3, 5], 3, 0)}`);

// const Heap = require('./collections/heap'); //http://www.collectionsjs.com

// function find_maximum_capital(capital, profits, numberOfProjects, initialCapital) {
//   const minCapitalHeap = new Heap([], null, ((a, b) => b[0] - a[0]));
//   const maxProfitHeap = new Heap([], null, ((a, b) => a[0] - b[0]));

//   // insert all project capitals to a min-heap
//   for (i = 0; i < profits.length; i++) {
//     minCapitalHeap.push([capital[i], i]);
//   }

//   // let's try to find a total of 'numberOfProjects' best projects
//   let availableCapital = initialCapital;
//   for (i = 0; i < numberOfProjects; i++) {
//     // find all projects that can be selected within the available capital and insert them in a max-heap
//     while (minCapitalHeap.length > 0 && minCapitalHeap.peek()[0] <= availableCapital) {
//       const [capital, index] = minCapitalHeap.pop();
//       maxProfitHeap.push([profits[index], index]);
//     }

//     // terminate if we are not able to find any project that can be completed within the available capital
//     if (maxProfitHeap.length === 0) {
//       break;
//     }

//     // select the project with the maximum profit
//     availableCapital += maxProfitHeap.pop()[0];
//   }

//   return availableCapital;
// }

// console.log(`Maximum capital: ${find_maximum_capital([0, 1, 2], [1, 2, 3], 2, 1)}`);
// console.log(`Maximum capital: ${find_maximum_capital([0, 1, 2, 3], [1, 2, 3, 5], 3, 0)}`);
