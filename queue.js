function q() {
    var Q = [];
    var t = this;
    this.length = function () {
        return Q.length
    };
    this.add = function (f) {
        Q.push(f)
    };
    this.run = function () {
        var n = Q.shift();
        if (typeof (n) === 'function') {
            n(function () {
                t.run.call(t)
            })
        }
    }
}
