function addToZero(num){
    for(let i = 0; i < num.length; i++){
        for(let j = 0; j < num.length; j++){
        if(num[j] + num[i] == 0){
            return true
        }
    }
}return false
}
// console.log(addToZero([]))
// console.log(addToZero([1]))
// console.log(addToZero([1, 2, 3]))
// console.log(addToZero([1, 2, 3, -2]))
// 0{n^2}

function hasUniqueChars (string) {
    for(let i = 0; i < string.length; i++){
        for(let j = i + 1; j < string.length; j++){
            if(string[i] === string[j]){
                return false
            }
    }
}return true
}

// console.log(hasUniqueChars("Monday"))
// console.log(hasUniqueChars("Moonday"))
//0(n^2)

function isPangram(str){
    let strArr = str.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    for(let i = 0; i < alphabet.length; i++){
        if(strArr.indexOf(alphabet[i]) < 0 ){
            return false
    }
}return true
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// console.log(isPangram("I like cats, but not mice"))

function findLongestWord(arr){
    if(arr[0].length > arr[1].length){
        return arr[0].length
    }else return arr[1].length
}
console.log(findLongestWord(["hi", "hello"]))
//0(1)
