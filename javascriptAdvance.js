/*
es6 stands for ecma-script 
*/
// jsJson()
// jsClass()
// jsClosures()
// jsCallBack()
// jsSyncandASync()
jsTryCatch()

// JSON 
    function jsJson(){
        var json = '{"name: "dheeraj", "lastname": "poonia"}'

        // json to js object 
            var json = '{"name": "dheeraj", "email": "xyz@gamil.com"}';
            // convert to object 
                var obj = JSON.parse(json)
                console.log(obj)
        
        // obj to json 
            var obj = {"name": "dheeraj", "email": "xyz@gamil.com"}
            // convert to json 
                var json = JSON.stringify(obj)
                console.log(json)
            
        // accessing method json similar to object 
            // first convert json to object then same using dot. or bracket[] we access data-property

        // use of js 
            // most commonly used format for transmitting data (data interchange) from a server to a client and vice-versa
            // JSON data are very easy to parse and use
            // It is fast to access and manipulate JSON data as they only contain texts
            // JSON is language independent. You can create and use JSON in other programming languages too
        

    }

// CLASSES 
    function jsClass(){
        // It used prototypes instead of classes. Objects are used to represent the real-world entity in the program.
        // similar to function but instead of keyword function we use class
        // similar to object class also have getter and setter 
        // acm : class work similar to object in js
        class Student{
            constructor(data){
                // special method where we intialze properties of class
                this.name = data.name
                this.id = data.id
            }

            getData(){
                return  `${this.name} ${this.id}`
            }
        }
        let data = {name: "dheeraj", id: "piet17cs035"}
        let dheeraj = new Student(data)
        console.log(dheeraj.name)
        console.log(dheeraj.getData())
    }

// CLOSURES 
    function jsClosures(){
        // variable have 2 scope {global, local}, Global variables can be made local (private) with closures.
        // But a function can also access variables defined outside the function, like this:
        // global variables belong to the window object.
        // A local variable can only be used inside the function where it is defined. It is hidden from other functions 
        // Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.   
        var cnt = 0
        function increment(){
            cnt += 1
        }
        increment(); increment(); increment();
        console.log(cnt)

        var cnt = 3 
        var decrement  = () => {cnt -= 1}
        decrement()
        console.log(cnt)

        // disadvantage of above 2 is we can change the cnt from outside of function

        // var add = (function(){var newCnt = 0; return function(){newCnt+=1; return newCnt;}})(); // ES5
        var add = (()=>{var newCnt = 0; return ()=>{newCnt+=1; return newCnt;}})(); // ES6
        add(); add(); add();
        console.log(add())
        // newCnt only access via add method 
        // THIS IS HOW WE MAKE PRIVATE VARIABLE 
        
    }

// CALLBACK 
    function jsCallBack(){
        // function that is passed as an argument inside of another function is called a callback function
        // callback function is that you can wait for the result of a previous function call and then execute another function call

        // simpleExample()
        // demoExample()

        function simpleExample(){
            fun()

            function fun(){
                callBack()
            }

            function callBack(){
                console.log("this is traditional way of callback concept")
            }
        }

        function demoExample(){
            
            function nextTask(arg){
                console.log(arg)
            }
            
            // setTimeout(currTask(), 2000000);
            setTimeout(function currTask(){ console.log("currTask: I came first but execute last why!") }, 3000);
            nextTask("nextTask: I dont want to wait for other")
        }

    }

// SYNC AND AWAIT
    function jsSyncandASync(){
        // synchronous : occurring at the same time
        // asynchronous : not occurring at the same time.

        const doWork = (resolve, reject) => {
            console.log("doing some work ...")
            resolve()  // promise of work success : resolve 
            // reject()  // promise is work failed : reject 
            // NOTE: reject() return => Uncaught (in promise)
        }

        // let myWorkPromise = () => Promise.resolve(1)
        // let myWorkPromise = new Promise(function (resolve, reject) { setTimeout(function () { resolve('Promise resolved')}, 4000); });
        let myWorkPromise = new Promise((resolve, reject) => { 
            // resolve('Promise resolved')   // this is wrong becz we resolve promise then asyc call end 
            // setTimeout(function () { doing some work }, 2000);             
            setTimeout(function () { doWork(resolve, reject) }, 3000);             
            console.log("i want to do more")  // this is never executed bcz promise is solved above, we return resolve, reject status above 
        });

        async function f(){
            console.log("Inside of async function: f()")
            let result = await myWorkPromise                    // await only used inside async funtion
            // The use of await pauses the async function until the promise returns a result(resolve or reject) value
            console.log("async function call: end") // is promive return reject this line is not executed
        }

        function ff(){
            console.log("Inside of sync function: ff()")
            console.log("sync function call: end")
        }

        f().then(()=>(console.log("work is done"))).catch(()=>(console.log("work is not done"))) // promise resolved then method inside then executed 
        // try then and catch by uncommenting reject() and resolve() call in doWork method 
        // then and catch are called callback of function f()
        ff()
    }

// TRY CATCH 
    function jsTryCatch(){
        // syntax error : also called parsing error
            // let 3b = 10                 // Uncaught SyntaxError:            
            // console.log("all fine") // never executed line

        // runtime error : also called exception
            // consol.log("hi")            // Uncaught ReferenceError: 
            // console.log(b)                 // Uncaught ReferenceError:
            // console.log("all fine") // never executed line

        // logical error : they are the result of syntax error or runtime error


        // syntax error : handle by interpreter
        // runtime error : handle by exception handling 

        // exception handling 
            // try{                         // syntax error are been handled 
            //     let 3b = 10  
            // }catch(err){
            //     console.log(err)
            // }
            try{                            // runtime error are handled 
                consol.log("hi")
            }catch(err){
                console.log(`some error occur1 = ${err}`)
                console.log("all fine") // executed line
            }

    }