/* Programming fundamentals
      1. variables
          variable helps us to make thing dynamic.



      2. operator
           mathmathical repsrentation
      3. Conditions
          Brain of a computer 
      4. Loops
      5. arrays
      6. Objects
      7. Functions
      8. Expressions vs statement

*/


console.log("abu Rayhan", "abu rayhan".length);
/*
এখানে আমরা যদি program run করি তাহলে দেখতে পাবো যে abu rayhan 10 আসছে, কিন্ত এই একয় কাজ টা আমরা অন্ন্য কার জন্ন্য করতে পারব না। কেন পারব না যদি করতে হই তাহলে আগে abu rayhan কে বাদ দিতে হবে। এখানে যেই নাম দ্বারা আমরা ডাইনামক বাভে টাইপ করে দিতে পারব সেই নামটা এ আগে আসবে। এইটা একটা সমস্যা কেন সমস্যা কারন যখন আমরা static বাভে কোন কিছু লিখে দেই তখন সেটা রান টাইমে পরিবর্তন করা যাই না ।

রান টাইম error বলতে বোঝায় program ঠিক ভাবে execute করছিল execute করতে করতে দেখল যে কোন একটা error চলে আসছে এইটাকে বলা হই রান টাইম error
console.log("abu Rayhan", "abu rayhan".length);
throw new Error('Something went wrong');

আর যখন আমরা সঠিক cood লিখতে ব্যাথ হই তখন যেই error ঠা আসে তখন আমরা সেটাকে compile error বলে থাকি।

যখন আমরা static data নিয়ে কাজ করব তখন আমরা console.log এর data কোন ভাবে change করতে পারব না। আর তার জন্ন্য আমাদের ব্যাবহার করতে হবে varaiables। যখনই আমরা দেখব Data তখন ই আম্রাদের use করতে হবে variables। 
*/

const names = ['Abu Rayhan', 'SHaker Hossain', 'akib ahmed', 'alvi chowduri'];
let index = -1;
let name = names[++index];

setInterval(() => {
    name = names[index++]
    console.log(name, name.length)

    if(index === names.length){
        index = 0; 
    }

},1000)

// নরমালি যেই data গুলা update হবে না কখন ও সেই খানে আমরা const ব্যাবহার করব। যেই ভ্যালুটা আমরা update করব সেখানে let use করব আর update না করলে const use করব। এখানে tricks টা হচ্ছে যখন ই আমরা variables declare করব তখনি আমরা const দিয়ে লিখব যখনি update করতে হবে তখনি সেখানে let use করা শুরু করব।


//operator 
/*
  operator গুল একধরনের function 
*/

if(studyBasic){
    wontJoin()
}

if(studyAdvanced){
    join()
}


// Scenario 1 - single branch
// if condition

if(hasMoney){
    purchasePhone()
}

// Scenario 2 - two branch
// if else condition

if(toss === head) {
    win()
} else{
    lose()
}

// Scenario 3 - Multiple Branch
if(1>1){
    big()
}else if(1<1){
    small()
}else{
    same()
}


// Loops

for(let i = 1; i <=100 ; i++) {
    console.log()
}

/* There are total three types of loop avialable in js
    1. for(when we know the range)
        1. range
        2. for in 
        3. for of
    2. while(when we dont know the range)
    3. Do while
*/
while(true){
    let num = Math.ceil(Math.random() * 100); 
    console.log('shaker hossain', num);
    if(num === 99) break; 
}



// array

const nam1 = 'alvi';
const nam2 = 'rayhan';
const nam3 = 'amir';
const nam4 = 'sakib';
const nam5 = 'abir';

const students = ['alvi','rayhan','amir','sakib','abir']

// nam1.senEmail()
// nam2.senEmail()
// nam3.senEmail()

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}