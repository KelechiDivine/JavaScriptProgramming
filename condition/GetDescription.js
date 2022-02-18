function getDescription(text){
    const dot = "..."
    return text.substring(0, 10) + dot
}

console.log(getDescription("Hello world"))