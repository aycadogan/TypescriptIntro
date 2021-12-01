const carMakers = ['ford','toyota','chevy']

let carsByMake: string[] = []

// carMakers.push(100)
// you can not push a number anymore

const car = carMakers[0]

carsByMake  = carMakers.map((car: string):string => {
    return car.toUpperCase() 
})

console.log(carsByMake);


const dates = [new Date(), new Date()]

const importantDates: ( Date | string)[] = []
importantDates.push('2021-11-30')
importantDates.push(new Date())
// importantDates.push(true) -> you are not allowed to push it

console.log(importantDates);
