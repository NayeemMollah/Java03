
// for loop 
let namta = 17
// 17 X 1 = 17 

for( let i=1; i<11; i++){
   console.log(namta + " X " + i + " = " + namta*i)
}

// array sintext

let teamMember = [10, 20, 30, 40, 50,60,70]

console.log(teamMember[3])

// Object 

let info = {
    name: "Nayeem",
    age : 23,
    area: "Gazipur"
}
console.log(info.area)


let {name, age, area} = {
    name : "Nayeem",
    age : 23,
    area : "Gazipur"
}
console.log(name)


let memberDetails = {
       nayeem: {
        name : "Nayeem",
        age : 23,
        area : "Gazipur"
       },

      shakib:{
        name : "Shakib",
        age : 25,
        area : "Dhaka"
      }
}

console.log(memberDetails.nayeem.area)
