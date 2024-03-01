var a = require('url');
var b = require('querystring');
const { Console } = require('console');
let exUrl ="https://www.coursera.org/programs/int426-generative-ai-batch-24-6jrh8?currentTab=CATALOG&invitationToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnZpdGF0aW9uSWQiOiIxOEVwX3JHc1NNT0JLZjZ4ckVqRHlnIiwiZXhwIjoiOTIyMzM3MjAzNjg1NDc3NTgwNyIsImp0aSI6IjE4RXBfckdzU01PQktmNnhyRWpEeWcifQ.KsGYlBikCk9wu_RmLXVuKo_ZsHM5cYKzWebVt9ws82o&utm_campaign=programId%3Av1qz3OkcT26as9zpHD9uDQ%3BcreatedAt%3A1704948327011%3Binvitation&utm_medium=email&utm_source=other";
let parsed_Url = a.parse(exUrl);
let parse_querys= b.parse(parsed_Url.query);
console.log("This is parsed Url: ",parsed_Url);
console.log("this is parsed query String: ",parse_querys);

const q2 = b.stringify({
    name:'localhost',
    page:'admin',
    month:'feb',
    year:'2024'
});
console.log(q2);

let obj={
    name : 'localhost',
    page:'admin',
    month:'feb',
    year:'2024'
};

let queryString = b.encode(obj);
console.log(queryString);

let str = 'name=localhost&page=admin&month=feb&year=2024';
let output = b.decode(str);
console.log("Output: ",output);


const valueToEncode = 'This is node js';
const encodedValue = b.escape(valueToEncode);
console.log(encodedValue);

const encodedValue1 = 'This%20is%20node%20js';
const decodedValue = b.unescape(encodedValue1);
console.log(decodedValue);