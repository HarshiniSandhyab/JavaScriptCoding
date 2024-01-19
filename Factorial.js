function factorial(number)
{
    let fact=1;
    while(number>0)
    {
        fact=fact*number
        number--;
    }
    return fact;

}
let num=3;
console.log(factorial(num))