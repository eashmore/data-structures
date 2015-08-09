function MinMaxStack() {
  this.stack = [];
  this.max = 0;
  this.min = 0;

  this.push = function(value) {
    if (stack.length === 0) {
      stack.push([value, value, value]);
    } else {
      var max = stack[stack.length - 1][1];
      var min = stack[stack.length - 1][2];
      var newMax = value > max ? value : max;
      var newMin = value < min ? value : min;
      stack.push([value, newMax, newMin]);
    }
  };

  this.pop = function() {
    var last = stack.pop();
    return last[0];
  };

  this.max = function() {
    return stack[stack.length - 1][1];
  };

  this.min = function() {
    return stack[stack.length - 1][2];
  };
}
