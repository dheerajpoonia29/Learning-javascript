# javascriptLanguage-autoDidact
<br>

```
// TESTING 
// console.log("Hello, World!")
// jsVariable()
// jsDataType()
// jsString()
// jsFunction()	
// jsObject()
// jsArray()
// jsLoops()

//	VARIABLE
	function jsVariable(){
		// Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.
		basic()
		// usingVar()
		// usingLet()
		// usingConst()
		function basic(){
			let a = 10;							console.log(a, typeof a);	//	js is weak type language since we won't define the type of a
			a = "string";						console.log(a, typeof a); //	we can change the type of data type at runtime 
			a = {name: 'dheeraj'};	console.log(a, typeof a);			
		}
		function usingVar(){
			// declaration
				var a = 'var a'
				console.log('Var declaration: ',a)

			//	var is redeclare and updated
				var _a = 'var _a';	var $a = 'var $a';		// ';' semicoln ar optional but use when we write in js code in single line
				console.log('Different way of var declaration: ',_a, $a)

			// defination of 'var b' moved to when interpreter do it task but intialiation remain at that line
				console.log('Var support hoisting: ', b)	
				var b = 'var b'

			//	If we knowingly update var c then is fine other it will create lots of bugs, that why we need let and const
				var c = 'var c'	
				if(true)					
					var c = 'var c updated'	 						//	bother if we used a similar name for a variable before as a variable etc if yes and we dont know about it then it surely change value of prev variable 
				console.log('Problem with var: ', c)
		}
		function usingLet(){
			// declaration
				let a = 'let a'
				console.log('Let declaration: ', a)

			// let is update  
				let b = 'let b is global'
				if(true){
					b = 'let b updated to global'
				}
				console.log('Let b: ', b)

			// not re-declaration : let b [SYNTAX_ERROR: IDENTIFIER 'a' HAS BEEN DECLARED ]

			// let re-delcare in different scope 	
				let c = 'let c declare globally'
				{
					let c = 'let c declare locally'
				}
				console.log('Checking re-declaretion: ', c)

			// scope checking 
				{
					let d = 'let c inside local'
				}
				// console.log('Checking scope: ', d)   REFERENCE_ERROR: C IS NOT DEFINED 
			
			// let not provide hoisting 
				// console.log('Checking hoisting: ', e)		REFERENCE_ERROR: CANNOT ACCESS 'e' BEFORE INITIALIZATION
				// let e = 'let e'		
		}
		function usingConst(){
			// declaration
				const a = 'const a'
				// const a;	not allow
			//	not update 
			//	not re-declare 
			//	not hoisting	
		}
		function usingNothing(){
			a = ["ram", 21]
			b = 100
			console.log(a, typeof a)
			console.log(b, typeof b)
		}
	}
	
//	DATA TYPE 
	function jsDataType(){
		function print(value){
			console.log('Value: ',value, ' [',typeof value, ']')
		}
		//	String: represents textual data
			let name = 'Dheeraj'
				print(name)				

		//	Number: integer, float, exponentials, NaN, +Infinity, -Infinity
			let age = 18
				print(age)
				console.log(1e5) 
				console.log(1e-5)

		//	BigInt: an integer with arbitrary precision, range above 2^53 (number highest range)
			let reading = 242.22423423
				print(reading)

		//	Boolean: Any of two values true or false
			let status = true 
				print(status) 

		//	Undefined: a data type whose variable is not initialized
			let future;

			function calculate(){}

				print(future);	print(calculate());

		//	Symbol: data type whose instances are unique and immutable, Symbol is an immutable primitive value that is unique
			let value = Symbol('hello')
				print(value) 

		//	Object: key-value pairs of collection of data, or null
			class car{}
			let audi = new car

			let user = {name: 'dheeraj', lastName: 'poonia'}
			
			let subject = ['cn', 'dbms', 'os', 'se']
			
			let arg = null;	//null is used to assign 'unknown' or 'empty' value to a variable
				
				print(audi);  print(user);	print(subject);	print(arg); 
		
		// Date: 
			let timeNow = new Date()
				console.log('date: ', timeNow)
				console.log('str: ', timeNow.getDate())
				console.log('str: ', timeNow.getMonth())
		
	}

//	STRING 
	function jsString(){
		function print(guide, str){
			console.log(guide, str)
		}

		var str = 'Hello' 
			print('Single quotess: ', str) 
		str = "Hello" 
			print('Double quotes: ',str)
		var date = 18
		str = `Hello today date = ${date}`
			print('Backticks: ',str)

		var str = "Dheeraj" 

		console.log('str.charAt(0): ', str.charAt(0))
		console.log('str.indexOf(\'D\'): ', str.indexOf('D'))
		console.log('str.indexOf(\'d\'): ', str.indexOf('d'))   //js is case sensitive 
		console.log('str.length: ', str.length)

		// str[1] = 'j'   																			  //js string are immutable, but we declare again name="neeraj"
		
		str = "This is a long message" + 
						"that spans across multiple lines"
		console.log(str)								// multiline string 
		str = "multiline \
		string"
		console.log(str)

		var str = "Dheeraj" 
		// make all uppercase 
			var newStr = str.toUpperCase()
			console.log(newStr)
		// make all lowercase
			var newStr = str.toLowerCase()
			console.log(newStr) 
		// make 2nd char uppercase 
			// str[2] = str[2].toUpperCase()						// not possible, string index are immutable 
			// console.log(str)													// print: Dheeraj (same) 
			// str.forEach((value, index)=>{               // TypeError: str.forEach is not a function
			// 			console.log(`${value} ${index}`)						
			// 		})
			// var newStr = [...str].forEach(c => console.log(c))   // print: d h e e r a j 
			// console.log(newStr)																	// print: undefined
			// var newStr = [...str].forEach(c => c.toUpperCase())   
			// console.log(str)																			// print: Dheeraj  but we need DHeeraj 
			// console.log(str.map(value => value))       // TypeError: str.map is not a function
			let strToArr = str.split('').map(value => value)   // print: ['D', 'h', 'e', 'r', 'a', 'j']
			let newArr = strToArr.map((ele, idx) => idx==1 && ele==ele.toLowerCase() ? ele.toUpperCase() : ele)
			var str = newArr.join('')
			console.log(str)                                   // print: DHeeraj


		// more method 
			// https://www.programiz.com/javascript/string
	}

// 	FUNCTION 
	function jsFunction(){
		
		// definition1: traditional way
			function definition1(arg){														// support hoisting 
				console.log(`function: ${arg}`)
			}
			// definition1("traditional way")
			// console.log("\ttype: ", typeof definition1)

		// definition2: es5 way - anonymous functions
			const definition2 = function(arg){										// not suport hoisting 
				// return "function: "+arg
				return `function: ${arg}`
			}
			// console.log(definition2("anonymous functions"), "\n\ttype: ", typeof definition2)

		// definition3: es6 way - anonymous arrow functions
		// ES5 TO ES6 remove keyword function place => arrow after () paranthesis
			// const definition3 = (arg) => {
			// 	return "function: "+arg
			// }
			const definition3 = (arg) => ("function: "+arg)    // arrwo function return by-default
			console.log(definition3("anonymous arrow functions"), "\n\ttype: ", typeof definition3)

		// parameter 
			function fun(a, c="default argu"){
				return c
			}
			// console.log("function arguments: ", fun("pass argu"))

		// call by value, call by reference 
			function callByValue(variable, arr, object){
				console.log("inside function: ", variable, arr, object)
				variable = "variable-update" 
				arr[0] = "arr-update" 
				object.property1 = "object-update"
			}
			// var variable = "variable-pass"
			// var arr = ["array-pass"]
			// var obj2 = {property1: "object-pass"}
			// callByValue(variable, arr, obj2)
			// console.log("outside function: ", variable, arr, obj2)
		
		//	confusing loop statement in js 
			var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;		//	Destructuring assignment, 
			// console.log("consufion 1: ",f()) 
		
		//	recursive function 
			let opStr = ''
			function recursion(n){
				// console.log(n)
				opStr += n;
				if(n>0)
					recursion(n-1)
			}
			recursion(5)
			// console.log('recursion basic opStr: ', opStr)

			function fact(n){
				if(n==0)
					return 1;
				else if(n>0){
					return n*fact(n-1)
				}
			}
			let fact5 = fact(5);
			// console.log('recursion factorial of 5: ', fact5)

		// prototype in function 
			function jsPrototypeInFunction(){
				function student(arg1, arg2){
					this.name = arg1
					this.id = arg2
					this.age = 21
				}
				student.prototype.collage = 'piet';			

				console.log('prototype in function: ', student.prototype)							// function have property named prototype by default												 
				console.log(student.prototype.collage, student.prototype.age)					// printing prototype, !NOTE: using prototype we not access other than prototype pair

				let dheeraj = new student("dheeraj", "PIET17CS035")															// without new => TypeError: Cannot read property
				console.log(dheeraj) // notice collage is not called, we explicit call it

				let neeraj = new student("neeraj", "PCE17CS045") 
				neeraj.collage = "pce"
				console.log(neeraj, neeraj.collage) 

				student.prototype.greet = function(){console.log(`hi my name is ${this.name} and i took admission in ${this.collage}`)}
				dheeraj.greet()
				neeraj.greet()
			}
			// jsPrototypeInFunction()

		// access function method and variable 
			function mainFun(){
				console.log('main function called')
				var name = "dheeraj"
				function nestedFun(){
					console.log("nested funtion called")
				}
				// nestedFun()     // 1st way 
				// return nestedFun() // 2nd way 
			}
			// mainFun()			// main function called 
			// var obj = new mainFun()
			// console.log(obj.name)   // undefined
			// obj.nestedFun()			// Uncaught TypeError: obj.nestedFun is not a function

			function mainFun2(){
				console.log('main function called')
				this.name = "dheeraj";
			}
			mainFun2()
			var obj = new mainFun2()
			console.log(obj.name)    // dheeraj 
			// conslusion use this keyword to make member of function variable 


	}

//	OBJECT 
	function jsObject(){		
		var arr = ["dheera", 21]
		arr[1] = 20;

		var obj = {name:"dheeraj", lastName:"poonia", age:21}; // key:pair combine called properities of object, data property
		var nestedObj = {regNo: "PIET17CS035", student: obj};
		var methodInObj = {aggregate: (m1, m2, m3)=>{return (m1+m2+m3)/3}, teacher: "rakhi ma'am"}
		let thisInObj = { name: 'John', age: 30, greet: function(){ return 'The name is' + ' ' + this.name } }   // !DOUBT : this.name is not fetching value !UPDATE when we use annonymous function ()=>{} this is return undefined 
		//  CLEAR : we need getter setter to do this which is called accessor property !UPDATE: without also done, using function()
		
		console.log(arr, typeof arr)
		console.log(obj, typeof obj)
		console.log(nestedObj)	
		console.log(methodInObj)	
		console.log(thisInObj, thisInObj.greet())

		function accessingObject(obj, nestedObj, methodInObj){
			// method 1
				console.log('access object using dot notation: ', obj.name, nestedObj.regNo, nestedObj.student.name); 

			// method 2
				console.log('access object using bracket notation: ', obj["name"]);

			// accessing object method 
				console.log('access method in object: ', methodInObj.aggregate(80, 95, 85))
		}
		// accessingObject(obj, nestedObj, methodInObj);

		function crudOperationOnObjectProperty(obj){
			console.log('crud on object property')
			// create
				obj.propertyName = "propertyValue"							//	obj["propertyName"] = "propertyValue"
				console.log('add property:', obj)

			// read
				// accessingObject(obj)

			// update
				obj.propertyName = "upatedPropertyValue"				// obj["propertyName"] = "upatedPropertyValue"
				console.log('udpate property:', obj)

			// delete
				delete obj.propertyName
				console.log('delete property:', obj)
		}
		// crudOperationOnObjectProperty(obj)

		function objectGetterSetter(){
			// set of key:pair are called data properties of obj
			// set of get set method are called accessor properties of object 
			// objectGetterSetter function work same as i custom make function crudOperationOnObjectProperty
			var obj = {name:"dheeraj", lastName:"poonia", age:21, 
									get getName(){return this.name}, 
									set setName(newName){return this.name=newName},
									set fullName(arg){[this.name, this.lastName]=arg.split(' ')}};
			{
				// console.log('testing getter setter on object: ', obj)
				// console.log('test getName: ', obj.getName) 
				// obj.setName = "neeraj"
				// console.log('test setName: ', obj.getName)
				// obj.fullName = 'harish pandey' 
				// console.log('test fianl: ', obj);
			}
			
			// define setter getter from outside 
			var name = {firstName: "dheeraj", lastName: "poonia"};
			// Object.defineProperty(obj, prop, {descriptor})
			Object.defineProperty(name, "getName", {get: function(){return	`${this.firstName} ${this.lastName} `}})
			Object.defineProperty(name, "setName", {set: function(newName){return [this.firstName, this.lastName]=newName.split(' ')}})
			console.log('test get: ', name.getName)
			name.setName = 'harsh bishnoi'
			console.log('test set: ', name.getName)
		}
		objectGetterSetter(obj)

		// let	[a, b, ...rest] = [10, 20, 30, 40, 50]; console.log(rest)	// Destructuring assignement
		// var i = Object.keys(arr).indexOf(obj);
	}

//	ARRAY 
	function jsArray(){
		var arr = ["pankaj", "dheeraj", "neeraj", "harsh", "gautam"]
		console.log(arr)

		//update
		arr[arr.indexOf("harsh")] = "harshdeep"
		console.log(arr)

		//insert 
		arr.unshift("notKnow")  // insert at end 
		arr.push("notKnown")    // insert at beg 
		console.log(arr)

		//delete
		arr.pop()								// delete at end 
		arr.shift() 						// delete at beg
		console.log(arr)

		// method on array 
			// link: https://www.programiz.com/javascript/array
	}

// LOOPS 
	function jsLoops(){
		let arr = [ 'a', 'b', 'c'];

		// iterating method 
			const m1 = () =>{
				console.log("iterate method1: ")
					for(let i=0; i<arr.length; i++){
						// console.log(arr[i])											//print: 1
						// console.log(i)														//print: 0 1 2
						
						var tp = arr[i]
						console.log(tp)													//print: hello 1 JavaScript
					}
			}

			const m2 = () =>{
				console.log("iterate method2: ")
					for(let x in arr){
						// console.log(x)														//print: 0 1 2 

						console.log(arr[x])											//print: hello 1 JavaScript
					}
			}

			const m3 = () => {
				console.log("iterate method3: ")
					// for(let [i, value] of arr){
					// 	console.log(i, value)										   //print: a undefined b undefined c undefined
					// }
					for(let [i, value] of arr.entries()){
						console.log(i, value)												//print: 0 a 1 b 2 c 
					}
			}

			const m4 = () => {
				console.log("iterate method4: ")
					arr.forEach((value, index)=>{
						console.log(`${value} ${index}`)						//print: a 0 b 1 c 2
					})
			}

			const m5 = () => {
				console.log("iterate method5: ")
					console.log(arr.map(value => value))					//print: ['a' 'b' 'c']   used for array updatation
			}

			// m1()
			// m2()
			// m3()
			// m4()
			m5()
	}

```
