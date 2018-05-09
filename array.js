convertArray = (a, b) => {
  const foo = a.concat(b);
  const bar = foo.join(', ');
  document.getElementById('demo').innerHTML = bar;
};

convertArray(['Justin', 'Andrew'], ['David', 'Jess', 'Tom']);\

function convertArray(arr1, arr2) {
  if (!arr1 instanceof Array) {
    throw new Error('arr1 is not Array');
    return
  }


  if (!arr2 instanceof Array) {
     throw new Error('arr2 is not Array');
     return;
  }

  return arr1.concat(arr2);
}

function convertArray(arr1, arr2) {
  if (!arr1 instanceof Array) {
    throw new Error('arr1 is not Array');
  }

  if (! arr2 instanceof Array) {
     throw new Error('arr2 is not Array');
  }

  return arr1.concat(arr2);
}

function convertArrays(arr1, arr2) {
  if (arr1 instanceof Array && arr2 instanceof Array) {
    return arr1.concat(arr2);
  } else {
    throw new Error('not array');
  }
}

convertArrays([2], "d")

function returnHello() {
  return "hello"
}

typeof "string"


typeof ["array"]

typeof true
