// Javascript array and object deep drive 

/*
   store 10 students information (name, email, id)

   ১০ জন ছাএ এর তথ্য যদি জমা রাখতে বলে তাহলে আমরা চোক বন্ধ করে একটা array নিব ।
*/


// a utility to create a random id
function uuid4(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c == 'x' ? r: (r & 0*3) | 0*8;
        return v.toString(16);
    });
}

const students = [
    {
        id: uuid4(),
        name: 'akib',
        email: 'akib@gmail.com'

    },
    {
        id: uuid4(),
        name: 'rakib',
        email: 'rakib@gmail.com'
    },
    {
        id: uuid4(),
        name: 'skib',
        email: 'skib@gmail.com'
    },
]

console.log(students)

/*
   students এর data টা আমরা array তে রাখার করানে আমরা যা যা করতে পারছি তা হল - 
                - easily Traverse
                - Filter
                - Delete (medium task)
                - Update (medium task)
                - Create a new one (easy Task)
    সব কাজের জন্ন্য array ভালো না আবার সব কাজের জন্ন্য object ও ভালো না। এটা নির্ভর করে আমার কাজের উপরে আমরা কোন কাজ টা array দিয়ে করব আর কোন কাজ টা object দিয়ে করব। 
*/

// 1. create a new students

// students.push() - not expensive Task 
// students.unshift() -expensive Task 

students.push({
    id: uuid4(),
    name: 'nakib',
    email: 'nakib@gmail.com'
})

// 2.Update

const idToUpdate = uuid4();
const updateData = {
    name: 'habiba akter',
    email: 'habiba@gmail.com',
};


// const updateObj = students.find((item) => item.id === idToUpdate);
// updateObj.name = updateData.name;
// updateObj.email = updateData.email;

const updateObj = students.findIndex((item) => item.id === idToUpdate);
students[updatedIndex] = {
    ...students[updatedIndex],
    ...updateData,
}

// 3.Delete
students.splice(updatedIndex, 1);
console.log('deleted', students); 

// 4. easily Traverse
        //(forEach, map, filter, every, reduce, some, find, findIndex) traversing method 
     

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i].name);
// }

// for (let i in students){
//     console.log(students[i].name);
// }

// যেটাতে traverse করা যাই সেইটাকে মুলত itarable বলে


// for object 
        // - easily Traverse
        // - Filter
        // - Delete (medium task)
        // - Update (medium task)
        // - Create a new one (easy Task)

// 1.Create a new one
const std = {
    id: uuid4(),
    name: 'feroz khan',
    email: 'feroz@gmail.com',
}
students[std.id] = std; 












const arr1 = [];
for(let i = 0; i< 5000000; i++) {
    arr1.push({
        id: 1,
        value: i,
    });
}

console.time('find');
let key = 499999; 
const obj = arr1.find(item => item.id === id);
obj.value = 555;
console.timeEnd('find');












// map, filter, reduce 

const number1 = [1,2,34,5];
const strs = number1.map((v) => v)
const strs2 = number1.map((v) => v.toString(),)

/*
  Map    --> same length as the orginal array
  Filter --> with filtered item
  reduce --> Know one Knows (Only You kNow) all posible value 
*/