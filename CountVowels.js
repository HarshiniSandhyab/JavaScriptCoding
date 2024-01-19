// let vowels=['a','e','i','o','u'];
// function countVow(String)
// {
//     let count=0;
//     for(letters of String.toLowerCase())
//     {
//         if(vowels.includes(letters))
//         {
//             count++
//         }
//     }
//     return count;
// }
// const str="minnu";
// console.log(countVow(str));
//----------------------------------------------------------------------------
const vowels="aeiou"
let counts={}
function findvowels(string)
{
    for(letter of string.toLowerCase())
    {
        if(vowels.includes(letter))
        {
            if(counts[letter])
            {
                counts[letter]++
            }
            else
            {

                counts[letter]=1
            }
        }

    }
    return counts;
}
console.log(findvowels("harshini"));