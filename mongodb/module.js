'use strict'
function Stu(){
	var name ;
	var age ;
	
	var getName = function(){
		return this.name;
	}
	var getAge = function(){
		return this.age;
	}
}

module.exports = Stu;