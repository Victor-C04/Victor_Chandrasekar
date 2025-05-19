var oddSeries2 = function(x){
    const result = [];
    if(x % 2 === 0){
        x = x - 1;
    };
    for(i = 0; i < x; i++){
        var num = (i * 2) + 1;
        result.push(num);
    }
    return result.join(', ')
}

console.log(oddSeries2(5));
console.log(oddSeries2(6));