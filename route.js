const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if(url == '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><h1>Welcome to the Assignement 1</h1><p>Please fill up the form to find</p><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }

  if(url == '/users') {

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>User List</title></head>');
    res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
    return res.end();
  }

  

  if(url == '/create-user' && method == 'POST') {
    const chunks = [];
    req.on("data", (chunk) => {
        console.log(chunk);
        chunks.push(chunk);
    })

    req.on("end", () => { 
        console.log("Post Request has been collected");
        const data = Buffer.concat(chunks).toString();
        console.log("Data", data)
    })

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>User List</title></head>');
    res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
    return res.end();
  }

}

module.exports = requestHandler;