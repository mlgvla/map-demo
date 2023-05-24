// Example 1: Using .map() to double each number in an array

// const numbers = [1, 2, 3, 4, 5]

// const doubledNumbers = numbers.map((number) => {
//    return number * 2
// })

// console.log("New array:", doubledNumbers)
// console.log("Old array still here:", numbers)




// Example 2: Using element and index

// const names = ["Alice", "Bob", "Charlie"]

// const indexedNames = names.map((name, index) => {
//    return { [index]: name }
// })

// console.log("A new array is generated", indexedNames)
// console.log("The old array is still here:", names)



// Example 3: Using element, index, and array

// const names = ["Alice", "Bob", "Charlie"]

// console.log("Names before being mutated", names)

// names.map((name, index, array) => {
//    const newArrayElement = "Sabotaged!"
//    array[index] = newArrayElement  // mutating the original array - probably not a good idea!
// })

// console.log("Name IS mutated:", names)



