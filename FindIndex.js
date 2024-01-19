const Array=[10,20,30,40,50]
let target=50;
function binarySearch(Array,target)
{
let low=0;
let high=Array.length-1;
while(low<=high)
{
    let mid=(low+high)/2|0;
if(Array[mid]==target)
{
    return mid;
}
else if(Array[mid]>target)
{
    high= mid+1;
}
else if(Array[mid]<target)
{
    low=mid+1
}

}
return -1
}

let result=binarySearch(Array,target)
if(result!==-1)
{
console.log(`the target element ${target} is at ${result}`)
}


