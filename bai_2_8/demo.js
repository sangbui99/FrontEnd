// thực hành
 let arr = [
    ['name', 'Son Dang'], 
    ['age', 21], 
    ['address', 'Ha Noi']
 ]

 var obj = {
 }
 obj[arr[0][0]] = [arr[0][1]]
 obj[arr[1][0]] = [arr[1][1]]
 obj[arr[2][0]] = [arr[2][1]]

 console.log(obj)


//  Đáp án phần hỏi đáp
// phương án 1
function arrToObj(arr) {
    let obj = {}
    let mang = [...arr]
    for (const value of mang) {
      console.log(value[0])
      obj = {...obj, [value[0]]:value[1]}
    }
    return obj
    }

// phương án 2
function arrToObj(arr) {
    return Object.fromEntries(arr);
 };

// phương án 3

