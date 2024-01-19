function palindromeNum(number)
{
    let str=number.toString();
    let rev=str.split('').reverse().join('')
    return str===rev
}
const num1=535;
const num2=8778;
console.log(palindromeNum(num1))
console.log(palindromeNum(num2))
