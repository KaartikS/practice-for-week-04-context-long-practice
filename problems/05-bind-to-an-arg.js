debugger;

function bindToAnArg(func, arg) {
  // Your code here
  let boundFunction = func.bind(null, arg);
  return boundFunction;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;