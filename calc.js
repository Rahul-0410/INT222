
exports.add=function(a,b){
    return a+b;
}
exports.sub=function(a,b){
    return a-b;
}
exports.mul=function(a,b){
    return a*b;
}
exports.div=function(a,b){
    return a/b;
};

exports.EO=function(a){
    if(a%2==0){
        return "even";
    }
    return "odd";
}


exports.swap=function(a,b){
    a=a+b;
    b=a-b;
    a=a-b;

    return `a = ${a} and b =${b}`;
    // return a,b;
}

