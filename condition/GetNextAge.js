function getNextAge(age){
    if(age === ""){
        return 0
    }

    return Number.parseInt(age) + 1
}

console.log(getNextAge(2))
console.log(getNextAge(""))