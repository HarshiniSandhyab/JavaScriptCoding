let arr1=[10,20,30,40,40]
let arr2=[40,50,50,60]
let unique=new Set()
let duplicates=[]
let arr3=arr1.concat(arr2)
for(let i=0;i<arr3.length;i++)
{
    if(unique.has(arr3[i]))
    {
        duplicates.push(arr3[i])
    }
    else
    {
unique.add(arr3[i])
    }
}
console.log(duplicates)