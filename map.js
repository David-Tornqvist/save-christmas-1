
function map(arr, func) {
    // skapa en ny tom array av samma längd som arr
    let newArray = []

    for (let i = 0; i < arr.length; i++) {
        newArray[i] = func(arr[i])   
    }

    return newArray;
    // för varje element i arr
    //      newArray[j] = func(arr[j])

    // returnera den nya arrayen
}

// Test 1
console.log('\nTEST 1')
const numberArray = [10, 50, 100]
const newNumberArray = map(numberArray, x => x + 5)
console.log(newNumberArray) // [15, 55, 105]
console.log(numberArray)    // [10, 50, 100] 

// Test 2
console.log('\nTEST 2')
const stringArray = ['boll', 'häst', 'flygplan']
const newStringArray = map(stringArray, str => str.toUpperCase())
console.log(newStringArray) // ['BOLL', 'HÄST', 'FLYGPLAN']
console.log(stringArray)    // ['boll', 'häst', 'flygplan']

// Test 3 - GÖR ETT EGET TEST HÄR
console.log('\nTEST 3')
const testRound = [[1,2,3],[1,2,3],[1,2,3]];

console.log(roundabout(testRound))


function roundabout(arr){
    return map(arr,fliplist)
}

function fliplist(arr){
    return map(arr,flipper)
}

function flipper(x){
    if(x === 3){return 1};
    if(x === 2){return 2};
    if(x === 1){return 3};
}