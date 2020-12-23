// let text:string;
// text = 'Hello World';
// let text2:string
// console.log(text);
// console.log('WTF');
// console.log(text2);
// let text: string = 'I don\'t want to learn anything>'
// console.log(text.length);
// console.log(text.charAt(99))
// console.log(text[99]);
// let hello: string = 'Hello'
// let world: string = 'World'
// console.log(`${hello} ${world}`);
//String
console.log('--------------------------------String--------------------');
//1
console.log("Hello world".startsWith('Hello'));
console.log("Hello world".startsWith('World'));
console.log("Hello world".endsWith('Hello'));
console.log("Hello world".endsWith('world'));
console.log('microsoft excel'.toUpperCase());
console.log('GOOGLE AND APPLE'.toLowerCase());
let text = 'hello world';
console.log(`H${text.substring(1, 6)}W${text.substring(7, text.length)}`);
//2
console.log('Computer'.substring(3, 6));
console.log('Death Race'.substring(0, 5));
console.log('Republican'.slice(2, 8));
//Number
console.log('--------------------------------Number--------------------');
//1
console.log(1e6);
console.log(1e7);
console.log(43e9);
console.log(12e-6);
console.log(1.234e-7);
//2
console.log(10000000000);
console.log(200000);
console.log(12200000000);
console.log(0.00000001);
console.log(0.00012);
//3
let oct1 = 0o144;
let oct2 = 0o157;
let oct3 = 0o67;
let oct4 = 0o25;
let oct5 = 0o143;
let hex1 = 0x64;
let hex2 = 0x6F;
let hex3 = 0x37;
let hex4 = 0x15;
let hex5 = 0x63;
//.toString()
let num = 100;
let num2 = 111;
let num3 = 55;
let num4 = 21;
let num5 = 99;
console.log(num.toString(8));
console.log(num2.toString(8));
console.log(num3.toString(8));
console.log(num4.toString(8));
console.log(num5.toString(8));
//base 16
console.log(num.toString(16));
console.log(num2.toString(16));
console.log(num3.toString(16));
console.log(num4.toString(16));
console.log(num5.toString(16));
//math.round
console.log(Math.round(12.423));
console.log(Math.round(31313.135));
console.log(Math.round(42.809));
//random
function random(min, max) {
    return Math.random() * (max - min) + min;
}
console.log('random num: ' + random(5, 8));
//Boolean
let A = false;
let B = true;
let C = false;
console.log(A || (B && C));
console.log(B || (A || C));
console.log(B && (A || C));
//valuable
console.log(typeof false);
console.log(typeof "ABC");
console.log(typeof 113113);
console.log(typeof null);
console.log(typeof "");
// console.log(typeof 13qed);
//object
console.log("-----------------------Object--------------------------");
let student = {
    id: 123,
    name: "Big John",
    single: true,
    grade: {
        smoking: 3.5,
        programing: 4.0
    }
};
//clone
let student2 = Object.assign(student);
//print student2
for (let key in student2) {
    if (key != "grade")
        console.log(`${key} = ${student2[key]}`);
    else {
        for (let key2 in student2.grade) {
            console.log(`${key}:${key2} = ${student2[key][key2]}`);
        }
    }
}
//assign & delete property
Object.assign(student2, { isActive: true });
console.log(student2);
Object.assign(student2.isActive, {});
console.log(student2);
//array
console.log("----------------------------------------Array---------------------------");
let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banana");
console.log(fruits.length);
//# sourceMappingURL=app.js.map