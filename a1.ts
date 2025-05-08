function formatString (input: string, toUpper: boolean = true ) : string{
    return toUpper ? input.toUpperCase() : input.toLowerCase()
} 
 
const result = formatString('Hello',false)
console.log(result)



function filterByRating(item : {title: string, rating: number}[]): {title: string, rating: number}[] {
    return item.filter(item => item.rating >= 4)
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];

const rating = filterByRating(books)
console.log(rating)



function concatenateArrays<T> (...arrays: T[][]): T[]{
    return arrays.flat();
}
const concatenate = concatenateArrays(['a', 'f'], ['T', 'H'])
console.log(concatenate)