var temp = {
    Minsk: 16,
    Moscow: 18,
    London: 21,
    Paris: 15,
    Berlin: 34,
};

var sum = 0;
for (let key in temp) {
    sum += temp[key];
}
console.log('средняя температура ' + sum / 5 + ' градусов');

function maxTemp(temp){
    var max = temp.Minsk;
    for (let key in temp) {
        if (max < temp[key]){
            max = temp[key];
        }
    }
    return max;
}

console.log(maxTemp(temp));