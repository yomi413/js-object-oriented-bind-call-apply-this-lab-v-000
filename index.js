//Your code here
const justInvoke = function(fn) {
  return fn.apply()
}

const setThisWithCall = function(fn, thisValue, arg) {

  return thisValue = fn.call(arg)
}
