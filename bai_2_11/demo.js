// Rest cho bài trc chưa nói
function logger(...obj){
  console.log(obj[0].childrenObj.nam)
}
// cách khác ở function dưới

// function logger({nam,age}){
//   console.log(nam,age)
// }

logger({
  nam:'sang',
  age: 23,
  add: 'nam dinh',
  childrenObj:{
    nam:'bui'
  } 
})



// toán tử Spread operator 
// để nối nhiều mảng
var arr = ['toi', "tên", `la`, 'bùi',`xuaan`, 'sang']
var arr2 = ['toi2', "tên2", `la2`, 'bùi2',`xuaan2`, 'sang2']
var arr3 = [...arr2,...arr]
console.log(arr3)

// để nối nhiều object
var obj = {
  nam:'sang'
}

var obj2 = {
    age: 23,
    add: 'nam dinh'
}

var obj3 = {...obj,...obj2}
console.log(obj3)