/*闭包(closure)是javascript的一个特性。因为javascript允许嵌套函数，所以函数定义时会维护一个作用域链对象。内层函数可以引用外部函数定义的变量。
由于作用域链对象的存在，外层函数引用后，它定义的变量不会自动回收，所以可以通过在函数外调用内层函数的方式动态维护外层函数定义的变量。*/

/*Example:*/

'use strict';

function foo(){
	let count=0;
	function f(){
		return ++count;
	}
	return f; //返回的是这个内层函数对象
}

let func=foo(); //然后我们就可以在函数外使用这个内层函数了

func();
func();
console.log(func()); //和预期的一样，输出3
