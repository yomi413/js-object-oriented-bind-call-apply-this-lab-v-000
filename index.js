//Your code here
const justInvoke = function(fn) {
  return fn.apply()
}

const setThisWithCall = function(fn, thisValue, arg) {
  
  return fn.thisValue.call(arg)
}
