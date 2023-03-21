
const http = require('http');
const port = 8080;
http
    .createServer((req, res) => {
        console.log("url", req.url);
        console.log('method', req.method);
        if (req.url == '/') {
            res.end(`
        
       
            
             <h1>Contact</h1>
       `)
        }
        if (req.url == '/contact') {
            res.end(`
            
           
         <a href="/">Home</a>
           
      `)
        }

    })
    .listen(port, () => {
        console.log(`Ứng dụng :${port}`);
    });