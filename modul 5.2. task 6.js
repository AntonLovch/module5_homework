const newArr =[2, 2, 2, 7, 2,];
let uniq = true;
for ( let i=0; i < newArr.length; i++){
  if(i>0){
    if(newArr[i]!=newArr[i-1]) {uniq = false}
  }
}
console.log(uniq);