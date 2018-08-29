//Your code here
const justInvoke = function(fn) {
  return fn.apply()
}

const setThisWithCall = function(fn, thisValue, arg) {
  return fn.call(thisValue, arg)
}

const setThisWithApply = function(fn, thisValue, args) {
  return fn.apply(thisValue)
}
