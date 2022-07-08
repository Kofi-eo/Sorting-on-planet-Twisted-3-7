function sortTwisted37(array) {
  function replace(x) {
    let newA = [];
    for (i = 0; i < x.length; i++) {
      let y = x.map(String);
      if (y[i].includes("3")) {
        let repA = parseInt(y[i].replace("3", "7"));
        x[i] = repA;
      } else if (y[i].includes("7")) {
        let repA = parseInt(y[i].replace("7", "3"));
        x[i] = repA;
      }
      newA.push(parseInt(x[i]));
    }

    array = newA;
    return array;
  }

  replace(array);
  array1 = array.sort((a, b) => a - b);
  replace(array1);
  array = array1;

  return array;
}

//Example Test
let newArray = [12, 13, 15, 16];
console.log(sortTwisted37(newArray)); //Returns ---> [ 12, 15, 16, 13 ]
