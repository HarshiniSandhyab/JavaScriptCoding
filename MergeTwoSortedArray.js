
let array1=[40,30,10,20]
let array2=[15,5,35,25]
function mergeArray(array1,array2)
{
array1.sort((a,b)=>a-b)
array2.sort((a,b)=>a-b)
let array3=array1.concat(array2)
array3.sort((a,b)=>(a-b))
return array3
}
console.log(mergeArray(array1,array2))

       
