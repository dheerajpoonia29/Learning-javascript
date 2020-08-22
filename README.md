# javascriptLanguage-autoDidact
<br>

```
// TESTING 
// console.log("Hello, World!")
// jsVariable()
// jsDataType()
// jsString()

// VARIABLE
	function jsVariable(){
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
	}
	
// DATA TYPE 
	function jsDataType(){
		function print(value){
			console.log('Value: ',value, ' [',typeof value, ']')
		}
		//	String: represents textual data
			let name = 'Hi, good morning'
				print(name);

		//	Number: integer, float, exponentials, NaN, +Infinity, -Infinity
			let age = 18
				print(age) 

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
			
			let param = null;	//null is used to assign 'unknown' or 'empty' value to a variable
				
				print(audi);  print(user);	print(subject);	print(param); 

	}

// STRING 
	function jsString(){
		function print(guide, str){
			console.log(guide, str)
		}

		var s = 'Hello' 
			print('Single quotess: ', s) 
		s = "Hello" 
			print('Double quotes: ',s)
		var date = 18
		s = `Hello today date = ${date}`
			print('Backticks: ',s)
	}
```
