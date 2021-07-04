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


let Employee = function(name,salary){
    
    if (!(this instanceof Employee)){
        return new Employee(name,salary);
    }

    this.name = name;
    this.salary = salary;
}
Employee.prototype.calculateSalary = function(){
    var month = new Date().getMonth()+1;
    var tax = 0;
    var total=this.salary*month;
    
    if (total <= 20000){
        tax = total*0.2;
    }else if (total>20000 && total <=30000){
        tax = total*0.25;
    }else{
        tax = total*0.27;
    }

    return {
        tax : tax,
        paid : total - tax
    }
}

var emp1 = Employee('yigit',3000);
var emp1_salary = emp1.calculateSalary();

var emp2 = new Employee('can',4000);
var emp2_salary = emp1.calculateSalary();

console.log(`${emp1.name} isimli personel toplam ${emp1_salary.tax} Euro vergi
kesintisi ile ${emp1_salary.paid} Euro maas almistir`);
console.log(`${emp2.name} isimli personel toplam ${emp1_salary.tax} Euro vergi
kesintisi ile ${emp2_salary.paid} Euro maas almistir`);






















