/*
	*	The express framework is built on top of the node. js framework 
	*	it helps in fast-tracking development of server-based applications. 
	*	Routes are used to divert users to different parts of the web applications based on the request made
*/

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))