module.exports = function () {
  var owner = 'Tyler';
  var constructor = function () { }
  constructor.prototype.getOwner = function () {
    return owner;
  };
  constructor.prototype.steal = function () {
    if (owner = 'Tyler') {
      owner = 'Tim';
    } else {
      owner = 'Tyler';
    }
  };
  return new constructor();
};
