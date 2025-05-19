var oddSeries = function(x){
    const result = [];
    for(let i = 0; i < x; i++){
        var num = (i * 2) + 1;
        result.push(num);
    }
    return result.join(', ');
}

console.log(oddSeries(5));