//Fiona - Question 1: fiveToOneHundred
const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++) {
        console.log(i)
    }
}
fiveToOneHundred();


//Abdullah - Question 2: multiplesOfThree
const multiplesOfThree = () => {
    for (let i = 3; i <= 100; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}
console.log(multiplesOfThree(100));


//Fiona - Question 3: multiplesOfThreeOrFive
const multiplesOfThreeOrFive = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            console.log(i);
        }
    }
}
console.log(multiplesOfThreeOrFive(100));


// //Abdullah - Question 4: untilNum
const untilNum = (num) => {
    for (i = 1; i <= num; i++) {
        console.log(i)
    }
}
untilNum(5)

//Fiona - Question 5: multiply
const multiply = (num1, num2) => {
    let product = num1 * num2;
    return product
};
console.log(multiply(2, 4)); // return 8


// Abdullah - Question 6: add
const add = (num1, num2) => {
    let sum = num1 + num2;
    return sum;
}
console.log(add(2, 4));


//Fiona - Question 7: isNegative
const isNegative = (num) => {
    if (num <= 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isNegative(3))

// Abdullah - Question 8 : triangleArea 
const triangleArea = (num1, num2) => {
    let area = num1 * num2 * 0.5;
    return area;
}
console.log(triangleArea(6, 8));



const betweenTwentyAndFourty = (num) => {
    if (num > 20 && num < 40) {
    return true;
  } else {
    return false;
  }
  }
  
  console.log(betweenTwentyAndFourty(20))