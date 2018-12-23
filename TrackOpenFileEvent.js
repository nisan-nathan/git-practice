var fs = require('fs');

var rs = fs.createReadStream('./winter.html');

rs.on('open', function(){
    console.log('The winter file is open');
});

