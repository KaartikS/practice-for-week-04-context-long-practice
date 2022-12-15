function callOnTarget(func, obj1, obj2) {
  // Your code here
  let boundFunc = func.bind(obj1, obj2);
  return boundFunc();
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;