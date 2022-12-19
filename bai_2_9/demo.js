// Destructuring, Rest
// với mảng
var arr = ['toi', "tên", `la`, 'bùi',`xuaan`, 'sang']
var[a,,b,...rest] = arr
console.log(a,b,rest)

// với object
var obj = {
  nam:'sang',
  age: 23,
  add: 'nam dinh',
  childrenObj:{
    nam:'bui'
  } 
}
// tên biến ages bị sai nên ko lấy. với obj phải đúng
var{nam,ages = 'mặc định', ...rest} = obj
console.log(nam, ages)
console.log( rest)
// đổi tên biến, và gọi biến trong obj con
var{nam:childrenNam, childrenObj:{nam}} = obj
console.log(childrenNam,nam)