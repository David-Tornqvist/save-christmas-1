
function max(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(max([-1,-4,-10,-4,-100]));

function min(arr) {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}


console.log(min([-1,-4,-10,-4,-100]));

function mean(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum/arr.length;
}

console.log(mean([ 2, 0, 5, 8, 4, 5, 9 ])) // 4.714285714285714

//att implementera en algoritm är att ta den abstrakta iden av att tillexempel räkna ut ett medelvärde och skriva den i faktiskt kod (Implementera en handling)
//en algoritm är en ide tillexempel "Kolla igenom alla värden och plocka ut det högsta" medans implementatationen är den faktiska koden (Implementation en sak)