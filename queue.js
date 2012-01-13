function q(){
	var Q = [], t = this;
	this.length = 0;
	this.add = function (f){
		Q.push(f);
		this.length++;
	};
	this.run = function(){
		var n = Q.shift();
		this.length = Q.length;
		if(typeof n === 'function'){
			var a = Array.prototype.slice;
			return n.apply(window,[function(){
				return t.run.apply(t, a.call(arguments));
			}].concat(a.call(arguments)));
		}
	};
}
