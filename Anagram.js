let s1="Silent";
let s2="Listen";
let a=s1.toLowerCase();
let b=s2.toLowerCase();
 a=a.split('').sort().join('')
b=b.split('').sort().join('')
if(a==b)
{
    console.log('anagrams');
}
else
{
    console.log('not anagrams');
}