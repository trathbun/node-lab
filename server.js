"use strict";

const quotes = require('./quotes')
const http = require("http");
const port = 3000;

http.createServer((req, res) =>{
    //code for getting random quote
    const index = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[index].quote;
    const randomQuoteAuthor = quotes[index].author;

    res.writeHead(200,{"Content-Type": "text/plain"});
    res.write("Random Quote Generator \n");
    res.write('Refresh the page to get a new quote! \n\n');
    res.write(`Quote: ${randomQuote} \n`);
    res.write(`Author: ${randomQuoteAuthor}`);
    res.end();
}).listen(port)