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
			var args = Array.prototype.concat.apply([t.run], arguments);
			return n.apply(null, args);
		}
	};
}
