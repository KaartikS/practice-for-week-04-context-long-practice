function changeContext(func, obj) {
  // Your code here
  const boundFunc = func.bind(obj);
  return boundFunc();
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;