// @author Daijiro Wachi <daijiro.wachi@gmail.com>
'use strict';
var stdin, stdout;
function Prime(stdin) {
  this.stdin = stdin;
}
Prime.prototype.is = function (n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  var i = 3;
  for (i; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};
Prime.prototype.calc = function () {
  var i = 1, count = 1, stdout = 0;
  for (i; this.stdin >= count; i += 1) {
    if (this.is(i)) {
      count += 1;
      stdout += i;
    }
  }
  return stdout;
};

stdin = 10000;
stdout = new Prime(stdin).calc();
console.log(stdout)
