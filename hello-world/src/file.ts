

// type alias

// let Employee:{
//     readonly id:number,
//     name:string,
//     retire:(date:Date)=>void
// }={
//     id:1,
//     name:'aksh',
//     retire:(date:Date)=>{
//         console.log(date)
//     }

// }

//by type alias we can refer the above class again as below

type Employee={

    readonly id:number,
    name:string,
    retire:(date:Date)=>void
} 


let employee1:Employee={
    id:1,
    name:'aksh',
    retire:(date:Date)=>{
        console.log(date)
    }

}




//UNION TYPES
//we can give variable or function parameter more than one type

function kgToLbs(weight:number|string):number{
    //NARROWING
    if(typeof weight=='number')
        return weight*2.2;
    else
        return (parseInt(weight)*2.2);
}




//insertion types
//another method for combining types-intersection

type Draggable={
    drag:()=>void
}
type Resizable={
    resize:()=>void
}

type UIWidget=Draggable & Resizable

let textBox:UIWidget={
    drag:()=>{},
    resize:()=>{}
}



//literal types(exact,specific)
//to limit values we can assign to a variable 

//suppose we need amount limited  rupees 10 or 20but not much or less exactly that amount 
//exact that amount is specified by literal types

let amount: number
//above method declare any n.o not exactly 10 or 20

type Amount1=10|20;
let amount1:Amount1 =10;

type Metric ='cm'|'inch'





//nullable types
//we cannot use null or undefined directly 

function greet(name:string|null|undefined){
    if(name)
        console.log(name.toUpperCase())
    else
        console.log('HOLA!');
}
//to write as below we must declare undefined first as in above
greet(undefined)





//Optional chaining
//many options check can be reduced in short syntax as ?. 


type Customer={
    birthday:Date
}

function getCustomer(id:number):Customer|null|undefined{
    return id===0?null:{birthday:new Date()}
}

let customer=getCustomer(1);
//  if(customer!==null && customer!==undefined)
//     console.log(customer.birthday)
//instead of  using the above syntax we can use as

//optional property access operator
console.log(customer?.birthday?.getFullYear());

//optional call operator

let log:any=null
log?.('a');