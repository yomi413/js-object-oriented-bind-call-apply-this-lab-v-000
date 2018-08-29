//Your code here
const justInvoke = function(fn) {
  return fn.apply()
}

const setThisWithCall = function(fn, thisValue, arg) {
  let thisValue = fn.call(arg)
  return thisValue
}
