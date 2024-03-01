var zlib=require('zlib');
var fs=require('fs');
var brot= zlib.createBrotliCompress();
var r=fs.createReadStream('text4.txt');
var w=fs.createWriteStream('text4.txt.gz');
r.pipe(brot).pipe(w);