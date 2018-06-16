var FormatDate = function () {
  this.time = {
    T: '',
    Y: '',
    M: '',
    D: '',
    W: '',
    H: '',
    m: '',
    s: '',
    format: 'YYYY/MM/DD HH:mm:ss',
    date: ''
  }
}

var addZero = function (n, l = 2) {
  if (typeof n !== 'number' && (typeof n === 'number' && n !== 0) && !n) {
    throw new TypeError(n + 'is not a valid value');
  }
  var list = n.toString().split('')
  if (list.length < l) {
    for (var i = 0; i < l - list.length; i++) {
      list.unshift('0');
    }
  }
  return list.join('');
}

var error = function (value, text) {
  if (!value) {
    throw new Error(text)
  }
}

var unshiftZero = function (n, l = 2) {
  if (typeof n !== 'number' && (typeof n === 'number' && n !== 0) && !n) {
    throw new TypeError(n + 'is not a valid value');
  }
  var list = n.toString().split('');
  if (list.length < l) {
    for (var i = 0; i < l - list.length; i++) {
      list.unshift('0');
    }
  }
  return list.join('');
}

FormatDate.prototype.resetTime = function () {
  var self = this
  for (let key in self.time) {
    if (!('format' in self.time)) self.time[key] = '';
  }
  return self
}

FormatDate.prototype.getFormat = function () {
  var self = this
  var s = this.time.format
  var timeList = this.time.format.split(/[\W]/)
  var obj = {}
  for (let key in timeList) {
    var val = self.time[timeList[key][0]].toString()
    s = s.replace(timeList[key], val)
  }
  // forEach(timeList, function (value, key) {
  //   var val = self.time[value[0]].toString()
  //   s = s.replace(value, val)
  // })
  this.time.date = s
  return this
}

FormatDate.prototype.getTime = function () {
  this.time.T = Array.prototype.shift.call(arguments)
  this.time.format = Array.prototype.shift.call(arguments) || this.time.format
  if (typeof this.time.T !== 'number' || isNaN(+this.time.T) || (typeof this.time.T === 'object' && !(this.time.T instanceof Date))) {
    throw new TypeError(this.time.T + 'is not a valid timestamp or time object');
  }

  const t = new Date(this.time.T);

  this.time.Y = t.getFullYear();

  this.time.M = unshiftZero(t.getMonth() + 1);

  this.time.D = unshiftZero(t.getDate());

  this.time.W = t.getDay();

  this.time.H = unshiftZero(t.getHours());

  this.time.m = unshiftZero(t.getMinutes());

  this.time.s = unshiftZero(t.getSeconds());

  return this
}

FormatDate.prototype.getDate = function () {
  this.resetTime()
  this.getTime.apply(this, arguments)
  this.getFormat(this.time.format)
  this.date = this.time.date
  return this
}
const formatDate = new FormatDate()

export default formatDate
