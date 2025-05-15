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




class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number){
        this.make = make;
        this.year = year
    }
    public getInfo(): string {
        return (`Make:${this.make}, Year: ${this.year}`)
    }
}

class Car extends Vehicle{
    private model: string
    constructor (make: string, year: number, model: string){
        super(make, year)
        this.model = model
    }
    public getModel(): string{
        return (`Model: ${this.model}`)
    }
}

const MyCar = new Car ('Toyeoa', 2021, 'Corolla');
console.log(MyCar.getInfo())
console.log(MyCar.getModel())







function processValue(value: string | number): number {
    if(typeof value === 'string'){
        return value.length;
    } else if(typeof value === 'number'){
        return value * 2;
    } else{
        throw new Error('Invalid Input')
    }
}

console.log(processValue('hello'))
console.log(processValue(45))






interface Product{
    name: string;
    price: number
}
function getMostExpensiveProduct(products : Product[]): Product | null{
    if(products.length === 0){
        return null
    }
    let mostExpensive= products[0]

    for(const product of products){
        if(product.price > mostExpensive.price){
            mostExpensive = product
        }
    }
    return mostExpensive
}
const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];

console.log(getMostExpensiveProduct(products));  





enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType (day: Day) : string{
    switch (day) {
        case Day.Saturday:
        case Day.Sunday:
            return 'Weekend'  
        default : 
            return 'Weakday'  
    }
}
console.log(getDayType(Day.Monday))
console.log(getDayType(Day.Sunday))





async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(n < 0) {
                reject(new Error('Negative Number not allowed'))
            } else{
                resolve(n* n)
            }
        }, 1000)
    })
}
squareAsync(4).then(console.log)
squareAsync(-3).catch(console.error)