function palindrome(number)
{
    return new Promise(function(resolve,reject)
    {
        if(number<=0)
        {
            reject("number is not valid")
        }
    else{
let numStr=number.toString();
let rev=numStr.split('').reverse().join('')
if(rev==numStr)
{
    resolve('number is palindrome')
}
else{
    resolve('number is not plaindrome')
}
    }
})
}
    palindrome(5253)
    .then(function(result)
    {
        console.log(result)
    })
    .catch(function(err){
        console.error(err)
    })

