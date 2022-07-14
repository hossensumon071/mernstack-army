// Array Oparetions - Imperative vs Declaretive

const numbers = [2,3,64,63,34,55,67,33];
/*যখন আমরা লুপ চালিয়ে Traverse করব তখন আমরা সে টাকে বলব Imperative Traverse এর অন্তভোক্ত।*/

for(let i = 0; i< numbers.length; i++){
    console.log(numbers[i]);
}

let sum = 0; 
for(let i = 0; i< numbers.length; i++){
    sum += number[i];
}

console.log(sum)

/*
  এখানে আমরা যেই ভাবে কাজ করলাম  এইটাকে বলে Imperative way। মানে আমরা এখানে কিভাবে লুপ চালাতে হবে সেটা ও বলছি আবার লোপ কোথায় থামবে সেটাও বলছি কিভাবে index এর ভ্যালো incereement করবে সেটাও বলছি। নরমালি জাভাস্কিপ্টে সাধারনত এইভাবে কাজ তেমন একটা করি না । আমরা সাধারনত কাজ করি বিভন্ন method বা fucntion use করে।

  array Traverse বলতে যা বোঝায় তা হল আমরা যে লুপ এর ভিতরে প্রথম থেকে শেষ পর্যন্ত যায় সেইটাকে array Traverse বলে।
*/

numbers.forEach(function (value, index, arr) {
    console.log(arguments)
})

// যখন আপনি কোন একটা library বা function নিয়ে কাজ করবেন কিন্ত আপনি বুঝতে পারছেন না এখানে কি কি callback আছে তখন আপনি arguments pass করে দিতে পারেন তাহলে আপনি সব দেখতে পারবেন

numbers.forEach(function (value, index, arr) {
    console.log(value, index, arr)
})

numbers.forEach(function(value){
    if(value % 2 === 0) {
        console.log(value);
    }
});

let sum1 = 0;

numbers.forEach(function(v){
    sum1 += v;
});
numbers.forEach(function(v, i){
   if(i <= 3) {
     sum1 += v;
   }
});

console.log(sum1);



// Make fun Javascript Array




const arr = [1, 2, 3, null, false, 4, 5, '', 'test', 6, 7]
// এখানে এই array থেকে কিভাবে Imperative way তে শুধু নাম্বার গুলো রাকবেন আর বাকি গুলি ফেলে দিবেন ?


const arr1 = [
    { id: 1, value: 10},
    { id: 2, value: 20},
    { id: 3, value: 30},
    { id: 4, value: 40},
    { id: 5, value: 50},
]

const index = arr1.findIndex(function(v) {
    return v.id === 4;
})

arr1[index].value = 400;
console.log(arr);



// please watch this video again and again