convertArray = (a, b) => {
  const foo = a.concat(b);
  const bar = foo.join(', ');
  document.getElementById('demo').innerHTML = bar;
};

convertArray(['Justin', 'Andrew'], ['David', 'Jess', 'Tom']);
