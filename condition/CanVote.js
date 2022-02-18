function canVote(age){
    if (age < 18){
        return false
    }
    else if (age >= 18){
        return  true
    }
}

console.log(canVote(12))
console.log(canVote(19))