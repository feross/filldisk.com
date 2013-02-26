;(function() {

/*
 * Avoid `console` errors in browsers that lack a console.
 */
var method
  , noop = function noop() {}
  , methods = [
  'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
  'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
  'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
  'timeStamp', 'trace', 'warn']
  , length = methods.length
  , console = (window.console = window.console || {})

while (length--) {
  method = methods[length]

  // Only stub undefined methods.
  if (!console[method]) {
    console[method] = noop
  }
}

/*
 * Shortcut log() and error() function for convenience
 */
window.log = function() {
  var args = Array.prototype.slice.call(arguments, 0)
  if (console.log.apply) console.log.apply(console, args)
}
window.error = function() {
  var args = Array.prototype.slice.call(arguments, 0)
  args.unshift('ERROR:')
  if (console.error.apply) console.error.apply(console, args)
}

}())