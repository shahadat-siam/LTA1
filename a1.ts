function formatString (input: string, toUpper: boolean = true ) : string{
    return toUpper ? input.toUpperCase() : input.toLowerCase()
}

 
const result = formatString('Hello',false)
console.log(result)