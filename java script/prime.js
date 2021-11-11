var a=5
var b=0
if(a>1){
    for(let i=2;i<a;i++){
        if(a%i==0){
            b=1
            break
        }
    }
}
if(b==1){
    console.log('not prime')
}
else{
    console.log('prime')
} 
     