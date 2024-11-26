"use strict";
var _a;
let employee1 = {
    id: 1,
    name: 'aksh',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight == 'number')
        return weight * 2.2;
    else
        return (parseInt(weight) * 2.2);
}
let textBox = {
    drag: () => { },
    resize: () => { }
};
let amount;
let amount1 = 10;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('HOLA!');
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear);
//# sourceMappingURL=file.js.map