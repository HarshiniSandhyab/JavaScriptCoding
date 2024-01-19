function countChar(String,letter)
{
    let count=0;
    for(let i=0;i<String.length;i++)
    {
        if(String.charAt(i)==letter)
        {
count+=1;
        }
    }
    return count;
}
const Str="beautiful";
const letter="u";
let result=countChar(Str,letter)
console.log(result)