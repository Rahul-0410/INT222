const url=require('url');
var addr='https://www.google.com/search?q=what+is+node+js&sca_esv=69e2b19d7f8e4a38&source=hp&ei=XKvVZaabDPi5juMP6cuWCA&iflsig=ANes7DEAAAAAZdW5bBRPKP_6gwT9np_NBuR0ej3yAToM&ved=0ahUKEwimuf6v-buEAxX4nGMGHemlBQEQ4dUDCBU&uact=5&oq=what+is+node+js&gs_lp=Egdnd3Mtd2l6Ig93aGF0IGlzIG5vZGUganMyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESIwTUABY_xFwAHgAkAEBmAGbAqAByxWqAQUwLjkuNbgBA8gBAPgBAcICCxAAGIAEGLEDGIMBwgIREC4YgAQYsQMYgwEYxwEY0QPCAggQABiABBixA8ICDhAAGIAEGIoFGLEDGIMBwgILEAAYgAQYigUYsQM&sclient=gws-wiz';
var q=url.parse(addr,true);
// var q=url.parse(addr,false);

// console.log(q.host);
console.log(q.pathname);
// console.log(q.search);
// console.log(q.href);
// console.log(q.hostname);
// console.log(q.path);
// console.log(q.auth);
// console.log(q.protocol);
// console.log(q.port);

var qdata=q.query;
// console.log(qdata.oq);
// console.log(qdata.gs_lp);
console.log(qdata.ei);