
// Step 1: Create an array of numbers. Use the '.map' function to double all the numbers in the array.
const numbers: number[] = [1, 2, 3, 4, 5];
const double: number[] = numbers.map((num:number) => num * 2)
console.log(double)

// Step 2: Create an array of words. Use the '.filter' function to select only the words that are longer than 5 letters.
const names: string[] = ["Max", "Moritz", "John"]
const longNames: string[] = names.filter((name:string)=> name.length >=5 )
console.log(longNames)

// Step 3: Create an array of numbers. Use the '.reduce' function to calculate the sum of all the numbers in the array.
const sum = numbers.reduce((total:number, num:number ) => total + num)
console.log(sum)

// Step 4: Create an array of numbers. Use the '.some' function to check if at least one number is greater than 10.
const bigNumbers: number[] = [8, 9, 10, 11, 12, 13]
const checkBigger10: boolean = bigNumbers.some((num:number) => num > 10)
console.log(checkBigger10)

const list:number[] = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194]
const task:number =
    list.sort((a, b) => a - b)
        .map((num:number) => num*num)
        .slice(2,list.length-4)
        .filter((num:number) => num % 4 != 0)
        .reduce((total:number, num:number) => total + num)
console.log("Bonusaufgabe: " + task)