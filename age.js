function ageCalculator(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth

  return name + " is " + age  + " years old."
} 

console.log(ageCalculator("Sam", 1994, 2021))