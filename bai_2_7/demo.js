// Enhanced object literals
// vd:1
var nam =`sang`
var price = 100

var course = {
   nam,
   price,
   getName() {
    return nam;
   }
}
console.log(course);


// vd:2

let cost = {
    [nam]: 'JavaScript',
    [price]: 1
}
console.log(cost)