let sales:number=1334;
//we doesnot need to declare number as below
let work=432;
let q=111_3434_3;
//we can seperate large numbers as above
let course="typescript"
//above is string and below is boolean
let isfunction=true;
let is_function=true;
//if we donot declare any value it is taken as any type as one of above types
let level;

// ARRAYS

//an array with any type of elements
let number1=[1,2,"f"]
//an array with only strings
let a:string[]=["s","d"]
//assigning each element seperately
let numbers:number[]=[];
// number[0]=4;
// number[4]=7;

//tuples

 let user:[number,string]=[1,"aks"]
 //user[1]. this shows all methods related to string
 //user[0]. shows all methods relaed to number

 //enums-list of relates constants

 //declaring without enum
//  const small=1;
//  const medium=2;
//  const large=3;

//by enum 

//keeping const simplifies .js code
const enum Size {Small=1,Medium,Large};
//adjusts itself the value of medium
let mySize:Size=Size.Medium;
console.log(mySize)

//functions

function calculateTax(income:number, taxYear:number):number{
    if(taxYear<2022)
        return income*1.2;
    return income*1.5;
}
calculateTax(33_333,2022);
console.log(calculateTax)
//we can control the if condition by adding as
// if(taxYear||2022<2022) takes default input in function as 2022
//or we can declare in function as taxYear=2022 also we can overwrite in function calculateTax(33_333,2023);
//use of question mark in function declarationfunction calculateTax(income:number, taxYear?:number):number{


//objects

let employee:{
    name:string,
    readonly id:number,
    cast?:string,
    retire: (date:Date)=> void
}={id:1,
    name:'aksh',
    retire:(date:Date)=>{
        console.log(date)
    }};
//readonly property makes sure that the value cannot be read again in the code as below
// employee.id=0; 

