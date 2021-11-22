
const doubleTheNums = arr => {
    for (i=0; i < arr.length; i++) {
        arr[i] *= 2;
    }
    return arr;
}

const doubleTheNums = arr => arr.map(x = x * 2);


Math.random() --> gives us a number [0, 1) (note that 1 is excluded)
Math.random() * 100 --> gives us a number [0, 100) (note that 100 is excluded)
Math.random() * 100 + 1 --> gives us a number [1, 101) (note that 101 is excluded)
Math.floor(Math.random() * 100) + 1 --> gives us an integer [1, 100]