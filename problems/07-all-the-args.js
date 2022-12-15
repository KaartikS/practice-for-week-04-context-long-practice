function allTheArgs(func, ...args) {
  // Your code here
  let boundFunc = func.bind(null, ...args);
  return boundFunc;
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;