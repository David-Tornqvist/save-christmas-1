
function indexOf(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === item){
            return i;
        }
    }
    return -1
}

function includes(arr, item) {
    return indexOf(arr,item) != -1;
}

const items = [
    'Bicycle',
    'Lego',
    'Doll',
    'Teddybear',
    'Crayons',
    'Fishing rod'
]

console.log(indexOf(items, 'Lego'))         // Should be 1
console.log(indexOf(items, 'Teddybear'))    // Should be 3
console.log(indexOf(items, 'Laser sword'))  // Should be -1
console.log(indexOf(items, 'Playstation'))  // Should be -1

// ------------------


console.log(includes(items, 'Lego')) // Should be true
console.log(includes(items, 'Teddybear')) // Should be true
console.log(includes(items, 'Laser sword')) // Should be false
console.log(includes(items, 'Playstation')) // Should be false


//En algoritm är en steg för steg beskrivning hur man utför något tillexempel söker en databas hittar snabbaste vägen eller sorterar filmer efter betyg.
//En algoritm består av komandon villkor och loopar
//pseudokod är något som liknar kod men egentligen inte är det. Det kan vara lättare att skriva pseudokod först eller om någon som inte är programmera vill beställa en algoritm.
