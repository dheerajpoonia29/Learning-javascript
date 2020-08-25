// jsJson()
jsCallBack()
// jsSyncandWait(https://www.programiz.com/javascript/async-await)

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