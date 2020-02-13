//如题，重写了ES5的9个数组方法，希望能记牢XD
Array.prototype.myForEach=function(f){
	let type=f.constructor.toString().slice(9,-20).toLowerCase();
	if (type!=='function') throw new Error('arg must be a function');
	for(let i=0;i<this.length;++i) f(this[i],i,this);
}
Array.prototype.myMap=function(f){
	let temp=new Array();
	let type=f.constructor.toString().slice(9,-20).toLowerCase();
	if (type!=='function') throw new Error('arg must be a function');
	for(let i=0;i<this.length;++i) temp[i]=f(this[i]);
	return temp;
}
Array.prototype.myFliter=function(f){
	let temp=new Array();
	let type=f.constructor.toString().slice(9,-20).toLowerCase();
	if (type!=='function') throw new Error('arg must be a function');
	for(let i=0;i<this.length;++i)
		if (f(this[i])) temp.push(this[i]);
	return temp;
}
Array.prototype.mySome=function(f){
	let type=f.constructor.toString().slice(9,-20).toLowerCase();
	if (type!=='function') throw new Error('arg must be a function');
	for(let i=0;i<this.length;++i)
		if (f(this[i])) return true;
	return false;
}
Array.prototype.myEvery=function(f){
	let type=f.constructor.toString().slice(9,-20).toLowerCase();
	if (type!=='function') throw new Error('arg must be a function');
	for(let i=0;i<this.length;++i)
		if (!f(this[i])) return false;
	return true;
}
Array.prototype.myReduce=function(f,initial){
	let type=f.constructor.toString().slice(9,-20).toLowerCase();
	if (type!=='function') throw new Error('arg must be a function');
	let array=this,length=this.length;
	for(let i=0;i<length-1;++i){
		this[1]=f(this[0],this[1]);
		this.shift();
	}
	return this[0];
}//recudeRight方法和上例原理相同
Array.prototype.indexOf=function(value){
	let type=f.constructor.toString().slice(9,-20).toLowerCase();
	if (type!=='function') throw new Error('arg must be a function');
	for(let i=0;i<this.length;++i)
		if (this[i]==value) return i;
	return -1;
}//lastIndexOf方法和上例原理相同
