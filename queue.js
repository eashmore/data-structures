function queue() {
  this.queue = [];

  this.enqueue = function(value) {
    this.queue.push(value);
  };

  this.dequeue = function() {
    return this.queue.shift();
  };
}
