function sum(digits)
{
    return new Promise((fulfil,reject)=>
    {
    if(digits.length>3)
    {
    reject("element should be within 3 digits")
    }
    else{
        let sum=0;
        let i=0;
        while(i<digits.length)
        {
            sum=sum+digits[i]
            i++;
        }
        resolve("sum is calculated"+sum)
    }
})
}