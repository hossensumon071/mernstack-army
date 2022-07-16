// Understand JavaScript  function - function as a value 


// 1. Function Defination
// 2. FUnction Invoking
// 3. function parameters /arguments
// 4. return result from function

function name_of_the_function() {
    // function body
    // you can write any valide code in js here 
    // return a result
}

// There are two steps 
// - Define a function
function testFunction (){
    const a = 10;
    const b = 20;
    const result = a + b + Math.max(a, b);
    console.log(result);
}
// - Invoke a function
testFunction()


f(g(x));

function sum(a, b) {
    return a+b ;
}

function sub(a, b) {
    return a - b;
}

function times(a, b) {
    return a*b;
}

// sum(10,20);
// sub(10,40);
// times(10,30);

const a = 10;
const b = 20; 

// const r1 = sum(a, b); //30
// const r2 = sub(a, b); // -10

const r3 = Math.abs(times(sum(a, b),sub(a, b)));


// function is a first class function
// we can function as a value 
// 10, "test", true --> function

        // benefits
            // - we can store function as a value
            // - we can store a function inside an object/array
            // - we can pass function as an arguments
            // - we can also return a function from another function


// prove --> Function is a value
function testFunction() {
    console.log('I am a test function');
}

// const fn = testFunction();
const fn = testFunction;
console.log(fn);
fn();

const ar  = [fn, testFunction]
const o = {
    fn: testFunction
}

function returnFn(){
    return testFunction
}


// lets construct a function
const fn1 = new Function('str',
    `let obj = {}
    for (let s of str){
    if(s !== ' '){
        obj[s] = s
    }
    }

    return obj`
)


// function strObj(str){
   
// }

console.log(strObj('HM nayem'));

const fData = {
    params: ['a', 'b'],
    body: [
        'const r = a+b',
        'return r'
    ]
}

const fBody = fData.body.reduce((acc, cur) => {
    acc += cur + ';';
    return acc;
}, '');