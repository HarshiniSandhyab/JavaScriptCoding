let Array=[10,15,20,25,30,35,40,45,50];
let evenCount=[];
let oddcount=[];
function getevenodd(Array)
{
for(let i=0;i<Array.length;i++)
{
    if(Array[i]%2==0)
    {
        evenCount.push(Array[i])
    }
    else{
        oddcount.push(Array[i])
    }
}
    return evenCount.concat(oddcount);
}
console.log(getevenodd(Array));

