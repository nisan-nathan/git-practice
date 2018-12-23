var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';

var parsedData = url.parse(adr, true);

console.log(parsedData.host);
console.log(parsedData.pathname);
console.log(parsedData.search);

var searchQuery = url.parse(adr, true).query;

console.log(searchQuery.year);
console.log(searchQuery.month);

