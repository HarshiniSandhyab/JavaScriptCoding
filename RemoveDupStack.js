let Array=[10,20,20,20,30,40];
function removeDup(Array)
{
    let stack=[]
    let unique=new Set()
    for(let i=0;i<Array.length;i++)
    {
    if(!unique.has(Array[i]))
    {
        stack.push(Array[i])
        unique.add(Array[i])
    
}
    }
    return stack
}
console.log(removeDup(Array))