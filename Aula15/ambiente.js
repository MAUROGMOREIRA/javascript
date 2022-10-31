let num = [8,9,3,4]
num.sort()
console.log(`O vetor tem ${num.length} posições`)
//console.log(`O primeiro elemento é ${num[3]}`)
/*
for(let pos= 0;pos < num.length; pos++){
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}
*/
for(let pos in num){
    console.log(`A posição ${pos} tem valor de: ${num[pos]}`)
}
