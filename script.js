// let val;

// let num=10;
// //object literals
// let yigit = {
//     name:'yigit',
//     yearOfBirth:2010,
//     job:'student'
// }
// //array
// let numbers = [10,20,30];

// val = num;
// val = yigit;
// val = numbers;

// console.log(val);
// console.log(typeof val);

// let yigit = {
//     name:'yigit',
//     yearOfBirth:2010,
//     job:'student'
// }

// function Person(name,yearOfBirth,job){
//     this.name=name;
//     this.yearOfBirth=yearOfBirth;
//     this.job=job;
//     this.calculateAge = function(){
//         return 2021 - this.yearOfBirth;
//     }

// }


// let yigit = new Person('yigit',2010,'student');
// let emel = new Person('emel',1989,'teacher');

// console.log(yigit.name);
// console.log(yigit.yearOfBirth);
// console.log(yigit.job);
// console.log(yigit.calculateAge());
// console.log('*****************');
// console.log(emel.name);
// console.log(emel.yearOfBirth);
// console.log(emel.job);
// console.log(emel.calculateAge());



// Prototype

// let Person = function(name,yearOfBirth,job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge=function(){
//         return 2021-this.yearOfBirth;
//     }

// }

// let emel = new Person('emel',1989,'teacher');

// console.log(emel);

// adding from outside calculateAge function 

// let Person = function(name,yearOfBirth,job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
    
// }

// Person.prototype.calculateAge = function(){
//     return 2021-this.yearOfBirth;
// }

// Person.prototype.getName = function(){
//     return this.name;
// }

// let emel = new Person('emel',1989,'teacher');

// console.log(emel);
// console.log(emel.calculateAge());
// console.log(emel.getName());


/*  
    Demo : Creating Objects 

    **Disardan name ve salary bilgilerini alan Employee
    constructor'i tanimlayiniz.
    **Yil icinde o ana kadar alinan toplam maas ve alinan toplam vergi
    tutarini hesaplayan fonksiyonu olusturun.
     Vergi dilimleri

     **20.000'e kadar %20 vergi
     **30.000'e kadar %25 vergi
     **40.000'e kadar %27 vergi
    **
*/


// let Employee = function(name,salary){
    
//     if (!(this instanceof Employee)){
//         return new Employee(name,salary);
//     }

//     this.name = name;
//     this.salary = salary;
// }
// Employee.prototype.calculateSalary = function(){
//     var month = new Date().getMonth()+1;
//     var tax = 0;
//     var total=this.salary*month;
    
//     if (total <= 20000){
//         tax = total*0.2;
//     }else if (total>20000 && total <=30000){
//         tax = total*0.25;
//     }else{
//         tax = total*0.27;
//     }

//     return {
//         tax : tax,
//         paid : total - tax
//     }
// }

// var emp1 = Employee('yigit',3000);
// var emp1_salary = emp1.calculateSalary();

// var emp2 = new Employee('can',4000);
// var emp2_salary = emp1.calculateSalary();

// console.log(`${emp1.name} isimli personel toplam ${emp1_salary.tax} Euro vergi
// kesintisi ile ${emp1_salary.paid} Euro maas almistir`);
// console.log(`${emp2.name} isimli personel toplam ${emp1_salary.tax} Euro vergi
// kesintisi ile ${emp2_salary.paid} Euro maas almistir`);



// Prototypal Inheritance

// let Person = function(name,yearOfBirth,job){
//     this.name = name;
//     this.yearOfBirth=yearOfBirth;
//     this.job = job;
    
// }


// Person.prototype.calculateAge = function(){
//     return 2021 - this.yearOfBirth;
// }


// let Teacher = function(name,yearOfBirth,job,subject){
//     Person.call(this,name,yearOfBirth,job);
//     this.subject=subject;
// }



// // Inherit the Person prototype methods
// Teacher.prototype = Object.create(Person.prototype);

// // Set Teacher constructor
// Teacher.prototype.constructor = Teacher;

// Teacher.prototype.greeting = function(){
//     return 'hello my name is'+ this.name;
// }

// let emel = new Teacher('emel',1989,'teacher','math');



// console.log(emel);
// console.log(emel.calculateAge());

// String

// var str1 = 'sadik';
// var str2 = new String('sadik');

// console.log(str1);
// console.log(typeof str1);
// console.log(str2);
// console.log(typeof str2);

// if (str1 === 'sadik'){
//     console.log('yes');
// }else{
//     console.log('no');
// }
// if (str2 === 'sadik'){
//     console.log('yes');
// }else{
//     console.log('no');
// }

// String.prototype.repeat = function(n){
//     return new Array(n+1).join(this);
// }
// console.log('sadik'.repeat(10));


// // Number 

// var num1 = 10;
// var num2 = new Number(10);

// // Boolean

// var bool1 = true;
// var bool2 = new Boolean(true);

// // Object

// var obj1 = {
//     name: 'sadik'
// }
// var obj2 = new Object({
//     name:'sadik'
// });

// // Array 

// var arr1 = ['ada','yigit','sena','cinar'];
// var arr2 = new Array('ada','yigit','sena','cinar');

// Array.prototype.remove = function(member){
//     var index = this.indexOf(member);

//     if (index > -1){
//         this.splice(index,1);
//     }
//     return this;
// }

// console.log(arr1.remove('sena'));

// Person Constructor
// function Person (name){
//     this.name = name;
// }

// Person.prototype.Introduce = function(){
//     console.log('hello my name is ' + this.name);
// }
// // Teacher constructor
// function Teacher(name,branch){
//     Person.call(this,name);
//     this.branch = branch;
// }

// Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.constructor = Teacher;
// Teacher.prototype.teach = function(){
//     console.log(this.name +' teaches ' + this.branch);
// }

// // Student constructor

// function Student(name,number){
//     Person.call(this,name);
//     this.number = number;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;
// Student.prototype.study = function(){
//     console.log(this.name + 's student number is '+this.number);
// }

// // Headmaster Constructor

// function Headmaster(name,branch){
//     Teacher.call(this,name,branch);
// }
// Headmaster.prototype = Object.create(Teacher.prototype);
// Headmaster.prototype.constructor = Headmaster;
// Headmaster.prototype.shareTask = function(){
//     console.log('I have already shared all the work');
// }

// let p1 = new Person('cinar');
// p1.Introduce();

// let t1 = new Teacher('sadik','matematik');
// t1.Introduce();
// t1.teach();

// let s1 = new Student('yigit','123');
// s1.Introduce();
// s1.study();

// let h1 = new Headmaster('ahmet','history');
// h1.Introduce();
// h1.teach();
// h1.shareTask();


//Primitive & Objects

// var a =10;
// var b = a;
// var a = 12;

// console.log(a);
// console.log(b);

// var obj1 = {
//     name:'ada',
//     age : 10
// }

// var obj2 = obj1;
// obj1.age=12

// console.log(obj1.age);
// console.log(obj2.age);

// var num = 50;
// var account = {
//     name:'yigit',
//     accountNumber:1213465
// }

// function update(a,b){
//     a = 100;
//     b.accountNumber='222222';
// }

// update(num,account);

// console.log(num);
// console.log(account);


// var products = [
//     {name:'product name',price: 1000},
//     {name:'product name',price: 1000},
//     {name:'product name',price: 1000},
//     {name:'product name',price: 1000},
//     {name:'product name',price: 1000},
//     {name:'product name',price: 1000}
// ]

// function filterProducts(prd){

// }

// filterProducts(products);


// Callback Functions 

// function MultipleByTwo(a,b,c,callback){
//     let arr = [];

//     if(callback && typeof callback === 'function'){
//         for (let i = 0;i<3;i++){
//             arr[i] = callback(arguments[i]*2);
//         }
//     }


    
//     return arr;
// }

// function addOne(a){
//     return a+1;
// }
// function addTwo(a){
//     return a+2;
// }
// function addThree(a){
//     return a+3;
// }

// //val = MultipleByTwo(5,10,20,addThree);
// val = MultipleByTwo(5,10,20,function(a){//anonymous function
//     return a+15;
// });
// //val = addOne(10);

// // for(let i = 0 ; i < val.length;i++){
// //     val[i] = addOne(val[i]);
// // }

// console.log(val);

//Immediate Functions 
// function welcome(){

//     var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];



//     var today = new Date();

//     var msg = 'Welcome. Today is '+ days[today.getDay()];
//     return msg;
// }

// (function(){

// }());

// (function(){

// })();

// (function(name){
//     var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];



//     var today = new Date();

//     var msg = 'Welcome '+name+' Today is '+ days[today.getDay()];
//     console.log(msg);
// }('Cinar'));

// Functions that Return Functions 

// function Question(hobby){
//     switch(hobby){
//         case 'car' :
//             return function(name){
//                 console.log(name + ' do you have a car?');
//             }
//         break;

//         case 'book' :
//             return function(name){
//                 console.log(name + ' what is your favorite book?');
//             }
//         break;

//         case 'software' :
//             return function(name,type){
//                 console.log(name + ' are you interested in '+type+'?');
//             }
//         break;
        
//         default:
//         return function(name){
//             console.log(name + ' how are you?');
//         }
//     }
// }

// var carQuestion = Question('car');

// carQuestion('cinar');
// carQuestion('emel');

// var bookQuestion = Question('book');

// bookQuestion('yigit');

// var softwarekQuestion = Question('software');

// softwarekQuestion('sadik','node.js');
// softwarekQuestion('ali','angular');


// Getter & Setter 

// const person = {
//     firstName : 'Sadik',
//     lastName : 'Turan',
//     // getfullName : function(){
//     //     return `${this.firstName} ${this.lastName}`
//     // }
//     // get fullName(){
//     //     return `${this.firstName} ${this.lastName}`
//     // },
//     // setFullName : function(value){
//     //     const parts = value.split(' ');
//     //     this.firstName = parts[0];
//     //     this.lastName = parts[1];
//     // }
//     // set fullName(value){
//     //     const parts = value.split(' ');
//     //     this.firstName = parts[0];
//     //     this.lastName = parts[1];
//     // }
// }

// Object.defineProperty(person,'fullName',{
//     get function() {
//         return `${this.firstName} ${this.lastName}`
//     },
//     set function(value) {
        
//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// })

// Object.defineProperty(person,'age',{
//     value : 50,
//     writable : true //you have to use this if you want to change age.
// })

// person.age = 55;

// //person.fullName='cinar turan';

// //console.log(person.fullName);

// console.log(person);

// Call, Apply & Bind

var welcome = function(a,b){
    console.log('Welcome '+this.name+ '.Are you interested in ' +a+' and '+b);
}

var yigit = {name:'Yigit'};
var ada = {name:'Ada'};

welcome.call(yigit,'asp.net','angular');
welcome.call(ada,'asp.net','angular');

welcome.apply(yigit,['asp.net','angular']);
welcome.apply(ada,['asp.net','angular']);

welcomeYigit =  welcome.bind(yigit);

welcomeYigit('asp.net','angular');

welcomeAda = welcome.bind(ada);

welcomeAda('asp.net','angular');

