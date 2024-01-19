function perfectNum(number)
{
    if(number<=0)
    {
        return "number is invalid"
    }
    else
    {
        let temp=0;
        for(let i=1;i<=number/2;i++)
        {
            if(number%i==0)
{
    temp+=i;
    
}
        }
if(temp==number) 
{
return "number is perfect"
}
else{
    return "number is not perfect"
}
       
    }
}
let num=28;
console.log(perfectNum(num))