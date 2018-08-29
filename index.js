//Your code here
const justInvoke = function(fn) {
  return fn.apply()
}

const setThisWithCall = function(fn, thisValue, arg) {
  let bob = fn.call(arg)
  return bob

}
