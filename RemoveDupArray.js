let Array=[10,20,20,30,40,10];
var dup=new Set(Array);
console.log(dup);

function getRepeat(){
var list = {};
Array.forEach(element => {
    if(list[element]){
        list[element]++;
    }
    else{
        list[element] = 1;
    }
});
return list;
}

console.log(getRepeat());
