let number = 10879000
let reverse = [];

function reverseNumber(num){
  
  `${num}`.split("").forEach(el=>{
    
    reverse.unshift(el)
  })  
  
  return reverse
}

reverseNumber(number)

reverse.forEach((el, index)=>{
  
  if (el==0&&reverse[index]==0) {
    reverse.shift()
  }
})



console.log(number,"---reversed--->",reverse.join(""))


