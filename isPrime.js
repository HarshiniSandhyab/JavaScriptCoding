function isPrime(number)
{
    if(number<=1)
    {
        console.log("number is not prime")
    }
    else{
        let flag=true;
        for(let i=2;i<=number/2;i++)
        {
            
            if(number%i==0)
            {
return false;
break;
            }
        
        }
        if(flag)
        {
            return "number is prime"
        }
        else{
            return "number is not prime"
        }
        

    }
}
let num=23;
console.log(isPrime(num))