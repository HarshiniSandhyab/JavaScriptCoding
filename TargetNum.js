let Array=[10,15,5,10,12,8,9,6]
let sum=20;
function targetNum(Array,sum)
{
    for(let i=0;i<Array.length;i++)
    {
        for(let j=i+1;j<Array.length;j++)
        {
            if(Array[i]+Array[j]===sum)
            {
                console.log(`the pairs which gives ${sum} are:${Array[i]},${Array[j]}`)
            }
        }
    }
}
targetNum(Array,sum)