let str1="thomas"
let str2="john"
let comman=[]
let a=str1.split('').sort().join('')
let b=str2.split('').sort().join('')
for(let i=0;i<a.length;i++)
{
    if(b.includes(a[i]))
    {
        comman.push(a[i])
    }
}
console.log(comman.join(''))


