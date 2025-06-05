// console.log("5"+4+5)
// console.log("5"-"6")
// console.log("5"+5+"4"+4+4)
// console.log("5"/4+5)
// function xyz()

// {
//     console.log("hello");
    
// }
const arr1=[10,20,30,40];
for (let i=0;i<arr1.lenght;i++)
{
    console.log(arr[i]);
}
const arr3=new Array(30);
const arr5=[10];
// console.log(arr3);




const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;

console.log(size);
console.log(fruits);

let fruit = fruits.at(2);
console.log(fruit);

console.log(fruits.join(" * "));
console.log(fruits.join(" &"));

console.log(fruits.pop());

fruits.push("Kiwi");
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("kathar");
console.log(fruits);


fruits[fruits.length] = "Kiwi";
console.log(fruits);

const name=["Ankur"];
const lastName=["Kumar"];

const Name = name.concat(lastName);

console.log(Name);