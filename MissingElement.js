let Array=[2,6,7,8,3]
let output=[]
function missingele(Array)
{
    let count=10
    for(let i=1;i<=count;i++)
    {
        if(!Array.includes(i))
        {
output.push(i)
        }
    }
    return output
}
console.log(missingele(Array))